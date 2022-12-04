const { Op } = require('sequelize');
const { User } = require('../models');

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: 'Some required fields are missing' });
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
    if (!userCheck) return res.status(400).json({ message: 'Invalid fields' });

    return next();
};

module.exports = {
    validateLogin,
    userExist,
};