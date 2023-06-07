const { ApolloServer } = require('@apollo/server');
const { loadFilesSync } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs: loadFilesSync('./src/**/*.graphql'),
  resolvers
});

module.exports = { server };
