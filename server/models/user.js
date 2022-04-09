const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

// Creating user schema
const userSchema = new Schema ({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  lifeLines: {type: [String]},
  date: {type: Date, default: Date.now},
  amountWon: {type: Number, required: true},
  checkPoints: {type: [String], default: [5, 5]},
});

// creating model
const User = mongoose.model ('user', userSchema);

// exporting
module.exports = User;
