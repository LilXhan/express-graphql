const { ApolloServer } = require('@apollo/server');
const { loadFilesSync } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers');
const { typeDefs: scalarsTypeDefs, resolvers: scalarsResolvers } = require('graphql-scalars');

const server = new ApolloServer({
  typeDefs: [
    ...loadFilesSync('./src/**/*.graphql'),
    scalarsTypeDefs
  ],
  resolvers: [
    resolvers,
    scalarsResolvers
  ]
});

module.exports = { server };
