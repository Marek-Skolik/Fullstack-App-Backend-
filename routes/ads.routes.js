const express = require('express');
const router = express.Router();
const ads = require('../controllers/ads.controller.js');
const imageUpload = require('../utils/imageUpload.js');

router.get('/ads', ads.getAllAds);
router.get('/ads/:id', ads.getAdsById)
router.get('/ads/search/:searchPhrase', ads.getAdsBySearchPhrase);
router.post('/ads', imageUpload.single('pic'), ads.addAds);
router.put('/ads/:id', imageUpload.single('pic'), ads.changeAds);
router.delete('/ads/:id', ads.deleteAds);

module.exports = router;