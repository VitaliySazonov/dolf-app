const config = require('./db');
const User = require('../models/user');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = (passport) => {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    // opts.issuer = 'accounts.examplesoft.com'; // what site do we use
    // opts.audience = 'yoursite.net';
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({id: jwt_payload.sub}, (err, user) => {
            if (err) return done(err, false);
            return user ? done(null, user) : done(null, false);
                // or you could create a new account
        });
    }));
}
