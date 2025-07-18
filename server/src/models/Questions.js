const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
    roomCode: { type : String, required: true },
    content: { type: String, required: true},
    // this should be id form the user table
    createdBy: { type: String},
    createAt: { type: Date, default: Date.now}
});

module.exports = mongoose.model("Questions", questionsSchema)