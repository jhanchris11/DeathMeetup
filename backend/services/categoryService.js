const Category = require('../models/Category');

exports.getCategories = async () => {
  return await Category.find();
};

exports.getCategoryById = async (categoryId) => {
    return await Category.findOne({_id: categoryId});
}

exports.insertCategory = async (categoryRequest)  => {
    let category = new Category(categoryRequest);
    return await category.save();
}
