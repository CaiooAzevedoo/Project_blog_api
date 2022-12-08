const { generateToken } = require('../utils/jwt.utils');

const login = async (req, res) => {
    const credentials = req.body;
    const token = generateToken(credentials.email);

    return res.status(200).json({ token });
};

module.exports = {
    login,
};
