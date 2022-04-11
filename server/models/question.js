const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


// Schema for answer
const questionSchema = new Schema ({
  question: {type: String, require: true},
  level: {type: Number, require: true},
  option1: {type: String, required: true},
  option2: {type: String, required: true},
  option3: {type: String, required: true},
  option4: {type: String, required: true},
  correctOption: {type: Number, required: true},
  used: {type: Boolean, default: false},
  date: {type: Date, default: Date.now},
});

// creating model
const Question = mongoose.model (
  'question',
  questionSchema
);

// exporting
module.exports = Question;
