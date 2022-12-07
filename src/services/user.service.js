// const jwt = require('jsonwebtoken');
const { User } = require('../models');

const getUsers = () => User.findAll({
});

// const postNewUser = async ({ displayName, email, password, image = null }) => { 
//     const newUser = await User.create({ displayName, email, password, image }); 
//     const { password: _, ...userWithoutPassword } = newUser.dataValues;
//     const token = jwt.sign({ data: userWithoutPassword });
//     return { user: userWithoutPassword, token };
// };

// const addNewUser = async ({ displayName, email, password, image = null }) => { 
//     const newUser = await User.create({ displayName, email, password, image }); 
//     const { password: _, ...userWithoutPassword } = newUser.dataValues;
//     const token = jwt.sign({ data: userWithoutPassword });
//     return { user: userWithoutPassword, token };
// };

module.exports = {
    getUsers,
    // postNewUser,
    // addNewUser,
};