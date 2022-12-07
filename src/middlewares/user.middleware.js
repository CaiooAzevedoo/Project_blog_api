const yup = require('yup');
// const validator = require('validator');
const jwt = require('../utils');

const validateCredentials = async (req, res, next) => {
 yup.object().shape({
    displayName: yup.string().min(8, '"displayName" length must be at least 8 characters long')
    .required('"displayName" is required'),
    email: yup.string().email('"email" must be a valid email').required('"email" is required'),
    password: yup.string().min(6, '"password" length must be at least 6 characters long'),
}); 
try {
await validateCredentials.validate(req.body);
} catch (err) {
    return res.status(400).json({
        erro: true,
        message: err.errors,
    });
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

// const validateDisplayName = (req, res, next) => {
//     const { displayName } = req.body;
//     if (displayName.length < 8) {
//         return res.status(400).json({ 
//             message: '"displayName" length must be at least 8 characters long' });
//     }

//     return next();
// };

// const validateEmail = (req, res, next) => {
//     const { email } = req.body;
//     if(!email) = 
// };

module.exports = {
    // validateDisplayName,
    validateCredentials,
    validateHeader,
    validateToken,
};