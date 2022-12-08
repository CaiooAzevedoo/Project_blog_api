const { User } = require('../models');

const getUsers = () => User.findAll({
    attributes: { exclude: 'password' },
});

const getUserId = (id) => User.findOne({
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
});

const addNewUser = async ({ displayName, email, password, image }) => { 
    User.create({ displayName, email, password, image });
};

module.exports = {
    getUsers,
    addNewUser,
    getUserId,
};