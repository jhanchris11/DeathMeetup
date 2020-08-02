const handleError = require('../helpers/handleError');
const categoryService = require('../services/categoryService');

exports.getCategories = async (req, res) => {
  try {
    let categories = await categoryService.getCategories();
    res.json({ categories });
  } catch (error) {
    res.status(400).send('Was there an error');
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(
      req.params.categoryId
    );

    res.json({
      category,
    });
  } catch (error) {
    res.status(400).send('Was there an error');
  }
};

exports.insertCategory = async (req, res) => {
  let { state, errors } = handleError.withErrorRequest(req);
  if (state) return res.status(400).json({ error: errors.array() });
  
  try {
    const newCategory = await categoryService.insertCategory(req.body);
    res.json({ newCategory });
  } catch (error) {
    res.status(400).send('Was there an error');
  }
};
