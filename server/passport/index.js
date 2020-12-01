const LocalStrategy = require('./localStrategy');
const db = require('../models');

module.exports = function(passport){
  // Register Strategies
  passport.use(LocalStrategy);

  passport.serializeUser((user, done) => {
    console.log('Serialize called');
    console.log(user); // the whole raw user object!
    done(null, { _id: user._id });
  });

  passport.deserializeUser((id, done) => {
    console.log('Deserialize called');
    db.User.findOne(
      { _id: id },
      'firstName lastName username',
      (err, user) => {
        console.log('Deserialize user called');
        console.log(user);
        done(null, user);
      }
    );
  });
}
