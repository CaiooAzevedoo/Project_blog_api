const express = require('express');
const { 
  validateHeader, 
  validateToken, 
  validateCredentials, 
  userExist } = require('../middlewares/user.middleware');
const { getUsers, addNewUser, getUserId } = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validateCredentials, userExist,
addNewUser);

router.get('/', 
validateHeader, 
validateToken, 
getUsers);

router.get('/:id', 
validateHeader, 
validateToken, 
getUserId);

// router.get('/', getUsers);

module.exports = router;