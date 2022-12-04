require('dotenv/config');

const jwt = require('jsonwebtoken');

const generateToken = (credentials) => jwt.sign(
    credentials,
    process.env.JWT_SECRET,
    {
        algorithm: 'HS256',
    },
);

module.exports = {
    generateToken,
};