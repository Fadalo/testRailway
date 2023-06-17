const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  "name": String,
  "type": { type: Number, default: 0 },
  "emailID": String,
  "password": String
});

module.exports = mongoose.model('users', userSchema);
