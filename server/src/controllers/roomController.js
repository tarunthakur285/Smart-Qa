const { request } = require("express");
const Rooms = require('../models/Rooms');
const Questions = require('../models/Questions');
const { callGemini } = require("../services/geminiService");

const roomController = {
    // POST /rooms/
    createRoom: async (request, response) => {
        try {
            const { createdBy } = request.body;
            const code = Math.random().toString(36).substring(2, 8).toUpperCase();

            const room = await Rooms.create({
                roomCode: code,
                createdBy: createdBy
            });
            response.json(room);

        } catch (error) {
            console.log(error);
            response.status(500).json({ error: "Internal server error" });
        }
    },

    //Get
    getByRoomCode: async (request, response) => {
        try {
            const code = request.params.code;
            const room = await Rooms.findOne({ roomCode: code });
            if (!room) {
                return response.status(404).json({ error: "Invalid room code" });
            }
            response.json(room);
        } catch (error) {
            console.log(error);
            response.status(500).json({ error: "Internal server error" });
        }
    },

    // POST/rooms/:roomCode/questions

    createQuestion: async (request, response) => {
        try {
            const { content, createdBy } = request.body;
            const { code } = request.params;
            const question = await Questions.create({
                roomCode: code,
                content: content,
                createdBy: createdBy
            });
            const io = request.app.get('io');
            io.to(code).emit("new-question", question); // Emit the new question to the room

            response.json(question);

        } catch (error) {
            console.log(error);
            response.status(500).json({ error: "Internal server error" });
        }
    },

    // GET/rooms/:roomCode/questions
    getQuestions: async (request, response) => {
        try {
            const { code } = request.params.code;

            const questions = await Questions.find({ roomCode: code })
                .sort({ createdAt: -1 }); // Sort by createdAt in descending order

            response.json(questions);
        } catch (error) {
            console.log(error);
            response.status(500).json({ error: "Internal server error" });
        }
    },
    genrateTopQuestions: async (request, response) => {
        try {
            const code = request.params.code;

            const questions = await Questions.find({ roomCode: code });
            if (questions.length === 0) return response.json([]);
            const topQuestions = await callGemini(questions);
            response.json(topQuestions);
        } catch (error) {
            console.log(error);
            response.status(500).json({ message: "Internal server error" });
        }
    }
};

module.exports = roomController;
