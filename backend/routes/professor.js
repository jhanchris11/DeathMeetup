const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const professorController = require('../controllers/professorController');

router.post(
  '/',
  [
    check('fullName', 'fullName is required').not().isEmpty(),
    check('urlImage', 'urlImage is required').not().isEmpty(),
  ],
  professorController.insertProfessor
);

module.exports = router;