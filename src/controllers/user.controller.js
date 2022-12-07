const { userService } = require('../services');
const { jwt } = require('../utils');

const addNewUser = async (req, res) => {
    const NewUser = req.body;

    await userService.postNewUser(NewUser);
    const token = jwt.generateToken(NewUser);

    return res.status(201).json({ messa: token });
};

const getUsers = async (_req, res) => {
    try {
    const allUsers = await userService.getUsers();
    if (!allUsers) throw Error;
    
    res.status(200).json(allUsers);
    } catch (err) {
    res.status(500).json({
        message: 'Error',
    });
    }
};

module.exports = {
    getUsers,
    addNewUser,
};