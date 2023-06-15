const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  "name": String,
  "description": String
});

mongoose.model('category', categorySchema);