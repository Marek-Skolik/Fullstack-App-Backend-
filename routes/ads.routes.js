const express = require('express');
const router = express.Router();
const ads = require('../controllers/ads.controller.js');

router.get('/ads', ads.getAllAds);

module.exports = router;