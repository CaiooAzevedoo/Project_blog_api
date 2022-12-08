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

module.exports = {
  addNewCategory,
};