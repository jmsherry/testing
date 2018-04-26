const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbConnectionURL = process.env.MONGODB_URI || 'mongodb://localhost/cars';
const promise = mongoose.connect(dbConnectionURL);

module.exports = promise.then(() => {
  console.log('Retrieved cars.');
}).catch((err) => {
  console.log('Error.', err);
});
