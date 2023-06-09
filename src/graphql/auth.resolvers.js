const AuthService = require('./../services/auth.service');

const login = async (_, { email, password }, context) => {
  const { user } = await context.authenticate('graphql-local', { email, password });
  return new AuthService().signToken(user);
};

module.exports = {
  login
};
