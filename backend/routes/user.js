const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');
// const verifyToken = require('../middelware/auth');

router.post(
  '/signup',
  [
    check('email', 'email is required').not().isEmpty(),
    check('name', 'name is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
  ],
  userController.signUpUser
);
router.post(
  '/signin',
  [
    check('email', 'email is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
  ],

  userController.signInUser
);
router.get('/:userId', userController.getUserById);
router.get('/', userController.getUsers);

module.exports = router;
