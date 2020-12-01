const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
		emailField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		db.User.findOne({ 'email': email }, (err, userMatch) => {
			if (err) {
        console.log("here123")
				return done(err);
			}
			if (!userMatch) {
        console.log("here1234")
				return done(null, false, { message: 'Incorrect email' });
			}
			if (!userMatch.checkPassword(password)) {
        console.log("here12345")
				return done(null, false, { message: 'Incorrect password' });
			}
			return done(null, userMatch);
		});
	}
);

module.exports = strategy;
