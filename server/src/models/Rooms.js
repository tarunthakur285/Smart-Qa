const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
    roomCode: { type: String, required: true, unique: true},
    // this should be userID form the user table
    createdBy: { type: String},
    isActive: { type: Boolean, default: true},
    createdAt : { type: Date, default: Date.now}
});

module.exports = mongoose.model("Rooms", roomsSchema);