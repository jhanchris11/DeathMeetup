const express = require('express');
const router = express.Router();

const dynamicController = require('../controllers/dynamicController');

router.get('/document-size', dynamicController.getItemsSize);

module.exports = router;
