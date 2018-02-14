const assert = require('assert');
const app = require('../../src/app');

describe('\'blah\' service', () => {
  it('registered the service', () => {
    const service = app.service('blah');

    assert.ok(service, 'Registered the service');
  });
});
