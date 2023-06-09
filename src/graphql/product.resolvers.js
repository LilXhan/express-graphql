const ProductsService = require('../services/product.service');

const productsService = new ProductsService();

const getProduct = async (_, { id }) => {
  return await productsService.findOne(id);
};

const getProducts = async (_, args) => {
  return await productsService.find({});
};

const addProduct = async (_, { dto }) => {
  return await productsService.create(dto);
};

const updateProduct = async (_, { dto, idProduct }) => {
  return await productsService.update(idProduct, dto);
};

const deleteProduct = async (_, { idProduct }) => {
  const { id } = await productsService.delete(idProduct);
  return id;
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
};
