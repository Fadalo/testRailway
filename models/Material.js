const mongoose = require('mongoose');
const { Schema } = mongoose;

const materialSchema = new Schema({
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

mongoose.model('materials', materialSchema);

// {
//     "name": "Java",
//     "category": "Programming Languages",
//     "oneLiner": "Java",
//     "duration": "1",
//     "language": "Java",
//     "description": "%3Cp%3EJava%20..%3C%2Fp%3E%20",
//     "lessons": [],
//   “photo”:”photo blob text”
//   }
  