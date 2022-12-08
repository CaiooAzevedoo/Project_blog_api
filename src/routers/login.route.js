const express = require('express');
const { login } = require('../controllers/login.controller');
const { validateLogin, userExist } = require('../middlewares/login.middleware');

const router = express.Router();

router.post('/', 
    validateLogin, 
    userExist, 
    login);

module.exports = router;