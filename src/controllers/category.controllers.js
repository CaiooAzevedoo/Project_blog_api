const { categoryService } = require('../services');

const addNewCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryService.addNewCategory(name);
    if (!newCategory) throw Error;

    return res.status(201).json(newCategory);
    } catch (err) {
    return res.status(404).json({ message: '"name" is required' });
    }
};

module.exports = {
  addNewCategory,
};