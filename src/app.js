const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4')


const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  require('./utils/auth');

  app.get('/', (req, res) => {
    res.send('Hola mi server en express');
  });

  app.get('/nueva-ruta', checkApiKey, (req, res) => {
    res.send('Hola, soy una nueva ruta');
  });


  //


  const typeDefs = `#graphql
    type Query {
      hello: String    
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'hola mundo'
    }
  }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
    
  //

  routerApi(app);
  app.use('/graphql', expressMiddleware(server));

  app.use(logErrors);
  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);
  return app;
}

module.exports = createApp;
