const CategoryService = require('./../services/category.service');
const boom = require('@hapi/boom');
const categoryService = new CategoryService();
const { checkRolesGql } = require('./../utils/checkRols.graphql');
const { checkJwtGraphql } = require('../utils/checkJwt.graphql');

const addCategory = async (_, { dto }, context) => {
  const user = await checkJwtGraphql(context);
  if (!user) {
    throw boom.unauthorized('unauthorized');
  }
  checkRolesGql(user, 'admin');

  return categoryService.create({
    ...dto,
    image: dto.image.href
  });
};

const getCategory = async (_, { id }) => {
  return await categoryService.findOne(id);
};

module.exports = {
  addCategory,
  getCategory
};
