const { BlogPost, User } = require('../models');
// const { BlogPost } = require('../models');

const addNewPost = async ({ title, content, userId }) => { 
  BlogPost.create({ title, content, userId });
};

const getAllPost = async () => BlogPost.findAll({ 
  include: [
  { model: User,
    as: 'user',
    // through: { attributes: [] },
    attributes: { exclude: 'password' },
   },
  // { model: Category, as: 'Category' },
] });

// const getAllPost = async () => { 
//   const allPost = await BlogPost.findAll(); 
//   const user = await allPost.getUser();
//   return user;
// };

// const getAllPost = () => BlogPost.findAll({

// });

module.exports = {
  addNewPost,
  getAllPost,
};