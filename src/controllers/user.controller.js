const { userService } = require('../services');
const { jwt } = require('../utils');

const addNewUser = async (req, res) => {
    try {
    const newUser = req.body;

    await userService.addNewUser(newUser);
    const token = jwt.generateToken(newUser.email);

    return res.status(201).json({ message: token });
    //   return res.status(201).json({ message: 'test' });
    } catch (err) {
    return res.status(400).json({ });
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

const getUserId = async (req, res) => {
    try {
    const { id } = req.params;
    const user = await userService.getUserId(id);
    if (!user) throw Error;

    return res.status(200).json(user);
    } catch (err) {
    return res.status(404).json({ message: 'User does not exist' });
    }
};

module.exports = {
    getUsers,
    addNewUser,
    getUserId,
};