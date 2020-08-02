const mongoose = require('mongoose');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  urlImage: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  releaseDate: {
    type: Date,
    required: true,
    default: null,
  },
  deletedAt: {
    type: Date,
    required: false,
    default: null,
  },
});

eventSchema.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('Event', eventSchema);
