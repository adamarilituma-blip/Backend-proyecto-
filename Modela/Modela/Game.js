const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: String,
  genre: String,
  review: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', GameSchema);
