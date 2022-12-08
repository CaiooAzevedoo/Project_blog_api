const express = require('express');
const { addNewCategory } = require('../controllers/category.controllers');
const { validateHeader, validateToken } = require('../middlewares/category.middleware');

const router = express.Router();

router.post('/', validateHeader, validateToken,
addNewCategory);

// router.post('/',
// addNewCategory);

module.exports = router;