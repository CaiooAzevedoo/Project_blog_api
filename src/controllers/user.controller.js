const { userService } = require('../services');
const { jwt } = require('../utils');

const addNewUser = async (req, res) => {
    try {
 const NewUser = req.body;

    await userService.addNewUser(NewUser);
    const token = jwt.generateToken(NewUser);

    return res.status(201).json({ message: token });
    } catch (err) {
    return res.status(400).json({});
    }
};

const getUsers = async (_req, res) => {
    try {
    const allUsers = await userService.getUsers();
    if (!allUsers) throw Error;
    
    return res.status(200).json(allUsers);
    } catch (err) {
    return res.status(500).json({
        message: 'Error',
    });
    }
};

module.exports = {
    getUsers,
    addNewUser,
};