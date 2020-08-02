const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getCategories);
router.get('/:categoryId', categoryController.getCategoryById);
router.post(
  '/',
  [
    check('category', 'category is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty()
  ],
  categoryController.insertCategory
);

module.exports = router;
