const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true}, 
  publicDate: { type: String, require: true },
  img: { type: String, require: true },
  price: { type: Number, require: true }, 
  location: { type: String, require: true }, 
  seller: { type: String, require: true, ref: 'User' }
});

module.exports = mongoose.model('Advert', adsSchema);