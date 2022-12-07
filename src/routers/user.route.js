const express = require('express');
const { validateHeader, validateToken } = require('../middlewares/user.middleware');
const { getUsers } = require('../controllers/user.controller');

const router = express.Router();

// router.post(
//     '/',
//     validateCredentials,

// );

router.get('/', validateHeader, validateToken, getUsers);

module.exports = router;