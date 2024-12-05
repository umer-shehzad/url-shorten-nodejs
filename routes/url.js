const express = require("express");
const {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleRedirectToOriginalURL,
} = require('../controllers/url');

const router = express.Router();

router.get('/:shortId', handleRedirectToOriginalURL);
router.post('/url', handleGenerateNewShortURL);
router.get('/url/analytics/:shortId', handleGetAnalytics);

module.exports = router;