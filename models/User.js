const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  "name": String,
  "type": { type: Number, default: 0 },
  "emailId": String,
  "password": String
});

mongoose.model('users', userSchema);
