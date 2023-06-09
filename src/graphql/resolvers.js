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

const { getProduct, getProducts, addProduct, updateProduct, deleteProduct } = require('./product.resolvers');

const resolvers = {
  Query: {
    // Products
    product: getProduct,
    products: getProducts
  },
  Mutation: {
    // Product
    addProduct,
    updateProduct,
    deleteProduct
  }
};

module.exports = resolvers;
