const express = require('express');
const { login } = require('../controllers/login.controller');
const { validateLogin, userExist } = require('../middlewares/login.middleware');
// const { generateToken } = require('../utils/jwt.utils');

const router = express.Router();

// router.post(
//     '/', 
//     validateLogin, userExist, (req, res) => {
//     const credentials = req.body;
//     const token = generateToken(credentials.email);

//     return res.status(200).json({ token });
// },
// );

router.post('/', 
    validateLogin, 
    userExist, 
    login);

module.exports = router;