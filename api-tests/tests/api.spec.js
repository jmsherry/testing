/* global describe, it */
/* eslint-disable no-console */
const request = require('supertest');
require('should');

const app = require('./../server');

describe('GET /cars', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/cars')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) throw err;
        done();
      });
  });
});

describe('POST /cars', () => {
  it('respond with 201 and car json', (done) => {
    request(app)
      .post('/cars')
      .send({ make: 'Citroen', bhp: 20 }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .expect(201)
      .expect(res => (res._id).should.not.be(null)) // eslint-disable-line no-underscore-dangle
      .end((err, res) => {
        // Calling the end function will send the request
        if (err) throw err;
        console.log(res);
        done();
      });
  });
});
