const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const commentController = require('../controllers/commentController');

router.get('/', commentController.getComments);

router.post(
  '/',
  [
    check('user', 'user is required').not().notEmpty(),
    check('event', 'event is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
  ],
  commentController.insertComments
);

module.exports = router;
