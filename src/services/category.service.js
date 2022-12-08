const { Category } = require('../models');

const addNewCategory = async ({ name }) => {
  await Category.create({ name });
};

const getCategory = () => Category.findAll();

module.exports = {
  addNewCategory,
  getCategory,
};