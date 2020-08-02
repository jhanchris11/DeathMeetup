const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: false,
  },
  urlImage: {
    type: String,
    trim: true,
    required: false,
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
module.exports = mongoose.model('Category', categorySchema);
