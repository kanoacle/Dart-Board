/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const darts = require('../darts.js');
describe('darts()', () => {
  it('should be a function', () => {
    expect(darts).to.be.a('function');
  });
  it('should take an array as a parameter', () => {
    expect(darts(18)).to.equal(false);
    expect(darts('13')).to.equal(false);
    expect(darts({hey: 'hello'})).to.equal(false);
    expect(darts(null)).to.equal(false);
    expect(darts(undefined)).to.equal(false);
  });
  it('should only take an array of numbers', () => {
    expect(darts([1, '17', undefined])).to.equal(false);
  });
  it('should only take in one set of scores at a time', () => {
    expect(darts([12, 4, 1, 6], [14, 3, 12, 7])).to.equal(25);
    expect(darts([12, 0, 3, 6], [1, 3, 2, 4, 2])).to.equal(15);
  });
  it('should add 10 points if hit radius is less than 5', () => {
    expect(darts([1, 4, 12])).to.equal(20);
  });
  it('should add 5 points if hit radius is between 5 and 10, inclusive', () => {
    expect(darts([1, 10, 8, 4, 5])).to.equal(35);
  });
  it('should add 0 points if hit radius is above 10 or the thrower misses', () => {
    expect(darts([1, 10, 14, 13])).to.equal(15);
    expect(darts([1, 10, 14, 6, 0, 2])).to.equal(30);
  });
  it('should add 100 bonus points if all hits have a radius less than 5', () => {
    expect(darts([1, 3, 5, 0])).to.equal(25);
    expect(darts([1, 1, 4, 2, 3, 2])).to.equal(160);
  });
  it('should return the throwers total score', () => {
    expect(darts([1, 12, 8])).to.equal(15);
    expect(darts([1, 12, 3, 7, 4])).to.equal(35);
    expect(darts([1, 14, 9, 2, 0])).to.equal(25);
    expect(darts([1, 4, 2, 2, 0, 3])).to.equal(50);
    expect(darts([1, 4, 3, 2, 3])).to.equal(150);
  });
});