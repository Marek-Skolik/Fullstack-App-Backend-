const mongoose = require('mongoose');

const advertSchema = new mongoose.Schema({
    login: { type: String, required: true},
    password: { type: String, required: true},
    avatar: { type: String, require: true },
    number: { type: Number, require: true }
});

module.exports = mongoose.model('Advertisers', advertSchema);