const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return status 200 for valid cart ID', (done) => {
    request(`${baseUrl}/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status 404 for invalid cart ID', (done) => {
    request(`${baseUrl}/hello`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

