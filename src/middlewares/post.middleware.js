const jwt = require('../utils');

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
  validateHeader,
  validateToken,
};