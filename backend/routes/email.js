const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const sendController = require('../controllers/sendController');

router.post(
  '/',
  [check('email', 'email is required').not().isEmpty()],
  sendController.sendMailMeet
);

module.exports = router;
