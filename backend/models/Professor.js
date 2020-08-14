const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professorSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  urlImage: {
    type: String,
    required: false,
  },
  urlVideo: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  additionalInformation: {
    type: [Schema.Types.Mixed],
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

module.exports = mongoose.model('Professor', professorSchema);
