const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should log correct total using stubbed Utils.calculateNumber', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 10');

    stub.restore();
    consoleSpy.restore();
  });
});
