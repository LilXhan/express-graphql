// const resolvers = {
//   Query: {
//     hello: () => 'hola mundo',
//     getPerson: (_, args) => `Hello, my name is ${args.name} and have ${args.age} years old`,
//     getInt: (_, args) => args.age,
//     getFloat: (_, args) => args.price,
//     getString: () => 'hello',
//     getBoolean: () => true,
//     getId: () => '12313123',
//     getNumbers: (_, args) => args.numbers,
//     getProduct: Product
//     newResolver: () => 'new resolver'
//   }
// }

const { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory } = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory } = require('./category.resolvers.js');
const { RegularExpression } = require('graphql-scalars');

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);

const resolvers = {
  Query: {
    // Products
    product: getProduct,
    products: getProducts,
    // Category
    category: getCategory
  },
  Mutation: {
    // Product
    addProduct,
    updateProduct,
    deleteProduct,
    // Auth
    login,
    // Category
    addCategory
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory
  }
};

module.exports = resolvers;
