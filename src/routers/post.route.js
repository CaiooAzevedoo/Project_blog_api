const express = require('express');
const { getAllPost } = require('../controllers/post.controller');
const { validateHeader, validateToken } = require('../middlewares/post.middleware');

const router = express.Router();

router.get('/', validateHeader, validateToken, getAllPost);
// router.get('/', getAllPost);
module.exports = router;