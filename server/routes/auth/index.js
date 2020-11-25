const express = require('express');
const router = express.Router();
const passport = require('../../passport');
const userController = require("../../controllers/userController");

// this route is just used to get the user basic info
router.get('/user', userController.getUserInfo)
// router.post('/login', userController.auth, passport.authenticate('local'), userController.authenticate);
router.post('/login', () => console.log("here"));
router.post('/logout', userController.logout);
router.post('/register', userController.register);

module.exports = router;
