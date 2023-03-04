const mongoose = require('mongoose');

const advertsSchema = new mongoose.Schema({
  login: { type: String, require: true },
  password: { type: String, require: true },
  avatar: { type: String, require: true },
  number: { type: Number, require: true }
});

module.exports = mongoose.model('Advertisers', advertsSchema);