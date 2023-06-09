const CategoryService = require('./../services/category.service');

const categoryService = new CategoryService();

const addCategory = async (_, { dto }) => {
  return categoryService.create(dto);
};

module.exports = {
  addCategory
};
