const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  "name": String,
  "category": String,
  "oneLiner": String,
  "duration": number,
  "language": String,
  "description": String,
  "type": { type: Number, default: 0 },
  "lessons": [],
  "photo": String
});

mongoose.model('courses', courseSchema);