const express = require('express');
const router = express.Router();
const passport = require('../../passport');
const userController = require("../../controllers/userController");

// this route is just used to get the user basic info
router.get('/user', userController.getUserInfo)
router.post('/login', userController.auth, userController.authenticate);
<<<<<<< HEAD
=======
//router.post('/login', () => console.log("here"));
>>>>>>> 5d0302f2f4dc745bd231db844f7046403e5651cc
router.post('/logout', userController.logout);
router.post('/register', userController.register);

module.exports = router;
