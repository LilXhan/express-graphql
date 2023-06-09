const createApp = require('./app');

// function anonima
(async () => {
  const port = process.env.PORT || 3000;
  const app = await createApp();
  app.listen(port, () => {
    console.log(`Mi port ${port}`);
  });
})();
