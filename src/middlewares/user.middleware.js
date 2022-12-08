const jwt = require('../utils');
const { User } = require('../models');

const validateCredentials = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    if (displayName.length < 8 || !displayName) {
        return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long' });
    }
    if (!email.match(/..*@..*\.com/)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
        return res.status(400).json({ 
        message: '"password" length must be at least 6 characters long' });
    }

return next();
};

const userExist = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({
        where: { email },
    });
    if (user) { 
        return res.status(409).json({ message: 'User already registered' }); 
}

    return next();
};

const validateHeader = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401).json({ message: 'Token not found' });
    }
    return next();
};

const validateToken = (req, res, next) => {
    const token = req.header('Authorization');
    const verifyToken = jwt.validateToken(token);
    if (!verifyToken) { 
        return res.status(401).json({ message: 'Expired or invalid token' }); 
    }
    return next();
};

module.exports = {
    validateCredentials,
    validateHeader,
    validateToken,
    userExist,
};