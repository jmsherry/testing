const mongoose = require('mongoose');
// Create a model for the cars data.
const { Schema } = mongoose;

const carSchema = new Schema({
  make: String,
  bhp: Number,
});

module.exports = carSchema;
