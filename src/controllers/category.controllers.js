const { categoryService } = require('../services');

const addNewCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryService.addNewCategory(name);
    if (!name) throw Error;

    return res.status(201).json(newCategory);
    } catch (err) {
    return res.status(400).json({ message: '"name" is required' });
    }
};

const getAllCategory = async (_req, res) => {
  try {
    const allCategories = await categoryService.getCategory();
    if (!allCategories) throw Error;
    return res.status(200).json(allCategories);
  } catch (err) {
    return res.status(500).json({
      message: 'Error',
  });
  }
};

module.exports = {
  addNewCategory,
  getAllCategory,
};