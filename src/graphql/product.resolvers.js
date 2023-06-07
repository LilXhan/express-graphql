const ProductsService = require('../services/product.service');

const productsService = new ProductsService();

const getProduct = (_, { id }) => {
  return productsService.findOne(id);
};

const getProducts = (_, args) => {
  return [];
};

const createProduct = (_, args) => {
  // code
};

module.exports = {
  getProduct,
  getProducts,
  createProduct
};
