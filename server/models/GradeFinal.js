// models/GradeFinal.js
const mongoose = require('mongoose');

const gradeFinalSchema = new mongoose.Schema({
  STUDENTNAME: { type: String, required: true },
  COURSENAME: { type: String, required: true },
  COURSENUMBER: { type: String, required: true },
  COURSECODE: { type: String, required: true },
  TERM: { type: String, required: true },
  "M1_Grade": { type: String, required: true },
  "M2_Grade": { type: String, required: true },
  "M3_Grade": { type: String, required: true },
  GRADEVISIBILITY: {type: String, required: true}
}, {
  collection: 'grade-final'
});

module.exports = mongoose.model('GradeFinal', gradeFinalSchema);
