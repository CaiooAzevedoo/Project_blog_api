const express = require('express');
const { addNewCategory, getAllCategory } = require('../controllers/category.controllers');
const { validateHeader, validateToken } = require('../middlewares/category.middleware');

const router = express.Router();

router.post('/', validateHeader, validateToken,
addNewCategory);

router.get('/', validateHeader, validateToken, getAllCategory);
module.exports = router;