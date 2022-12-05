const validateDisplayName = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400).json({ 
            message: '"displayName" length must be at least 8 characters long' });
    }

    return next();
};

// const validateEmail = (req, res, next) => {
//     const { email } = req.body;
//     if(!email) = 
// };

module.exports = {
    validateDisplayName,
};