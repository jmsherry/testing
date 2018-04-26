/* globals test expect */
import { getSquareFromCoordinates } from './../helpers';

test('it works', () => {
  const coordinates = ['left', 'middle'];
  const answer = getSquareFromCoordinates(...coordinates);
  expect(answer).toEqual(3);
});

test('it throws an error if x or y are the wrong format', () => {
  const badXcoords = ['fred', 'middle'];
  const badYcoords = ['left', 'tom'];
  expect(() => {
    getSquareFromCoordinates(...badXcoords);
  }).toThrow('Unexpected x value');
  expect(() => {
    getSquareFromCoordinates(...badYcoords);
  }).toThrow('Unexpected y value');
});
