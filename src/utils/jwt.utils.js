require('dotenv/config');

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'segredoAqui';

const jwtConfig = {
    algorithm: 'HS256',
    // expiresIn: '15min',
};

const generateToken = (credentials) => jwt.sign(
    credentials,
    secret,
    jwtConfig,
);

module.exports = {
    generateToken,
};