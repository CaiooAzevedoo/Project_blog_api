const express = require('express');

const { validateLogin, userExist } = require('../middlewares');

const routers = express.Router();

routers.post('/login', validateLogin, userExist, (req, res) => {
    const credentials = req.body;
    if (credentials) { res.status(200).json({ message: 'Opa' }); }
});

module.exports = routers;