const Event = require('../models/Event');
const managmentDataHelper = require('../helpers/managmentDataHelper');

exports.getEvents = async () => {
  return await Event.find();
};

exports.getEventsPaginatedByFilter = async ({ filter, page, limit }) => {
  filter = managmentDataHelper.parsingFilterArray(filter);
  let options =
    filter != undefined || filter != null ? { category: { $in: filter } } : {};

  let eventsAggregate = Event.aggregate([
    {
      $match: options,
    },
    {
      $sort: { "releaseDate" : 1 }
    },
    {
      $lookup: { 
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
      },
    },
    {
      $unwind: '$category',
    },
  ]);
  let response = await Event.aggregatePaginate(eventsAggregate, {
    page,
    limit,
  });

  return response['docs'];
};

exports.getEventById = async (eventId) => {
  return await Event.findOne({ _id: eventId });
};

exports.insertEvent = async (eventRequest) => {
  let event = new Event(eventRequest);
  return await event.save();
};

