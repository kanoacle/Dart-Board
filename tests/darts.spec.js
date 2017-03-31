/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const darts = require('../darts.js');
describe('darts', () => {
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
});