const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  deletedAt: {
    type: Date,
    required: false,
    default: null,
  },
});
module.exports = mongoose.model('Comment', commentSchema);
