/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3333;

require('./db');

const Car = require('./models/car/car');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Get all the cars.
app.get('/cars', (req, res) => {
  Car.find({}).exec((err, cars) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(cars);
  });
});

// Input a car.
app.post('/car', (req, res) => {
  const newcar = new Car(req.body);
  newcar.save((err, car) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).json(car);
  });
});

// Delete a car.
app.delete('/car/:id', (req, res) => {
  Car.remove({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(202).send('car deleted.');
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
