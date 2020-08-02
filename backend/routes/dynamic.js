const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const dynamicController = require('../controllers/dynamicController');

router.get('/document-size', dynamicController.getItemsSize);

module.exports = router;
