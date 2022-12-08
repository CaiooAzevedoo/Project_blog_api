const { BlogPost } = require('../models');

const addNewPost = async ({ title, content, userId }) => { 
  BlogPost.create({ title, content, userId });
};

const getAllPost = () => BlogPost.findAll();

module.exports = {
  addNewPost,
  getAllPost,
};