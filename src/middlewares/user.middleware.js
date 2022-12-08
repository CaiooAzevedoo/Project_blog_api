// const yup = require('yup');
// const validator = require('validator');
const { Op } = require('sequelize');
const jwt = require('../utils');
const { User } = require('../models');

// const validateCredentials = async (req, res, next) => {
//  yup.object().shape({
//     displayName: yup.string().min(8, '"displayName" length must be at least 8 characters long')
//     .required('"displayName" is required'),
//     email: yup.string().email('"email" must be a valid email').required('"email" is required'),
//     password: yup.string().min(6, '"password" length must be at least 6 characters long'),
// }); 
// try {
// await validateCredentials.validate(req.body);
// } catch (err) {
//     return res.status(400).json({
//         erro: true,
//         message: err.errors,
//     });
// }
// return next();
// };

const validateCredentials = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    if (displayName.length < 8 || !displayName) {
        return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long' });
    }
    if (!email) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
        return res.status(400).json({ 
        message: '"password" length must be at least 6 characters long' });
    }

return next();
};

const userExist = async (req, res, next) => {
    const { email, password } = req.body;
    const userCheck = await User.findOne({
        where: {
            // OP.and = vai pegar os lugares onde há igualdade nos dois parâmetros
            // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
            [Op.and]: [
                { email },
                { password },
            ],  
        },
    });
    if (!userCheck) return res.status(400).json({ message: 'User already registered' });

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