const boom = require('@hapi/boom');

const checkJwtGraphql = async (context) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) {
    throw boom.unauthorized('unauthorized');
  }
  return user;
};

module.exports = {
  checkJwtGraphql
};
