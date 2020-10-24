const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dateCreated: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  repoUrl: {
    type: String,
    required: true
  },
  appUrl: {
    type: String
  }

});

module.exports = mongoose.model('Project', projectSchema);