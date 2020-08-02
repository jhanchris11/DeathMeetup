const handleError = require('../helpers/handleError');
const eventService = require('../services/eventService');

exports.getEvents = async (req, res) => {
  try {
    let events = await eventService.getEvents();
    res.json({ events });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getEventsPaginatedByFilter = async (req, res) => {
  let { state, errors } = handleError.withErrorRequest(req);
  if (state) return res.status(400).json({ error: errors.array() });

  try {
    const events = await eventService.getEventsPaginatedByFilter(req.body);

    res.json({
      events,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await eventService.getEventById(req.params.eventId);
    res.json({ event });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.insertEvent = async (req, res) => {
  let { state, errors } = handleError.withErrorRequest(req);
  if (state) return res.status(400).json({ error: errors.array() });

  try {
    const newEvent = await eventService.insertEvent(req.body);
    res.json({ newEvent });
  } catch (error) {
    res.status(400).send(error);
  }
};
