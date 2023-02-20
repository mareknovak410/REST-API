const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

router.get('/signup', controller.signupForm);
router.post('/signup', controller.signup);
router.get('/signin', controller.signinForm);
router.post('/signin', controller.signin);
router.get('/signout', controller.signout);
router.get('/profile', controller.profile);

module.exports = router;
