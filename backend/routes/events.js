const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const eventsController = require('../controllers/eventsController');

router.get('/', eventsController.getEvents);
router.post(
  '/pagination',
  [
    check('page', 'page is required').not().isEmpty(),
    check('limit', 'limit is required').not().isEmpty(),
  ],
  eventsController.getEventsPaginatedByFilter
);
router.get('/:eventId', eventsController.getEventById);

router.put('/:eventId', eventsController.updateEventById);

router.post(
  '/',
  [
    check('title', 'title is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
    check('user', 'user is required').not().isEmpty(),
    check('category', 'category is required').not().isEmpty(),
    check('releaseDate', 'category is required').not().isEmpty(),
  ],
  eventsController.insertEvent
);

module.exports = router;
