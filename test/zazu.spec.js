const { expect } = require('chai');

describe('zazu.json', () => {
  it('is valid', () => {
    /* eslint-disable global-require */
    const zazu = require('../zazu.json');
    expect(zazu).to.be.an('object');
  });
});
