const { userService } = require('../services');
const { generateToken } = require('../utils');

const addNewUser = async (req, res) => {
    try {
    const newUser = req.body;
    // const { displayName, email, password, image } = req.body;

    await userService.addNewUser(newUser);
    // await userService.addNewUser({ displayName, email, password, image });
    const token = generateToken(newUser.email);
    // const token = jwt.generateToken({ email });

    return res.status(201).json({ token });
    } catch (err) {
    return res.status(401).json({ message: err.message });
    }
};

const getUsers = async (_req, res) => {
    try {
    const allUsers = await userService.getUsers();
    if (!allUsers) throw Error;
    
    return res.status(200).json(allUsers);
    } catch (err) {
    return res.status(500).json({
        message: err.message,
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