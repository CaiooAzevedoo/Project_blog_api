require('dotenv/config');

const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'segredoAqui';

const jwtConfig = {
    algorithm: 'HS256',
    // expiresIn: '15min',
};

const generateToken = (credentials) => jwt.sign(
    credentials,
    SECRET,
    jwtConfig,
);

const validateToken = (token) => { 
try {
    const user = jwt.verify(token, SECRET); 
    return user;
} catch (err) {
    return false;
}
};    

module.exports = {
    generateToken,
    validateToken,
};