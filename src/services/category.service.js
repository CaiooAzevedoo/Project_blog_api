const { Category } = require('../models');

const addNewCategory = async ({ name }) => {
  await Category.create({ name });
};

module.exports = {
  addNewCategory,
};