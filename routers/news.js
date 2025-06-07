const express = require('express');
const router = express.Router();
const { getNews } = require('../controllers/newsController');
const authenticateteToken= require('../middleware/authMiddleware');

router.post('/fetch', authenticateteToken, getNews);

module.exports = router;
