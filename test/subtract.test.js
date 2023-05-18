const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('GET /', () => {
  it('Testing index endpoint', async () => {
    const response = await request(app).get('/sub/6&4');

    expect(response.text).to.equal('Result: 2');
  });
});
