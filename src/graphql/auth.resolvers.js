const login = async (_, { email, password }, context) => {
  const { user } = await context.authenticate('graphql-local', { email, password });
  return user;
};

module.exports = {
  login
};
