const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');
const GqlLocalSrategy = require('./strategies/local-graphql.strategy');

passport.use(GqlLocalSrategy);
passport.use(LocalStrategy);
passport.use(JwtStrategy);
