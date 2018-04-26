const mongoose = require('mongoose');
const carSchema = require('./schema/car-schema');

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
