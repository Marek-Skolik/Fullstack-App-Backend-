const Advert = require('../models/Ads.model.js');

exports.getAllAds = async (req, res) => {
  try {
    res.json(await Advert.find().populate('seller'));
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};