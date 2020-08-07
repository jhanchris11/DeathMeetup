const Event = require('../models/Event');
const managmentDataHelper = require('../helpers/managmentDataHelper');
const mongoose = require('mongoose');

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
      $sort: { releaseDate: 1 },
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
  try {
    let eventAggregate = await Event.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(eventId) },
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
      {
        $lookup: {
          from: 'professors',
          localField: 'professor',
          foreignField: '_id',
          as: 'professor',
        },
      },
      {
        $unwind: '$professor',
      },
    ]);
    eventAggregate[0]['professor']['additionalInformation'] = [{"key": "fullname" ,"value": eventAggregate[0]['professor']['fullName']},...eventAggregate[0]['professor']['additionalInformation']];
    return eventAggregate[0];

  } catch (error) {
    throw new Error(error); 
  }
};

exports.insertEvent = async (eventRequest) => {
  let event = new Event(eventRequest);
  return await event.save();
};

exports.updateEventById = async (eventId, eventRequest) => {
  return Event.findOneAndUpdate(
    { _id: eventId },
    { $set: eventRequest },
    { new: true }
  );
};
