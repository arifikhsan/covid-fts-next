import 'regenerator-runtime/runtime';
import nock from 'nock';
import baseUrl from '../../utils/base-url';
import axios from 'axios';
import fs from 'fs';

describe('/api/daily', () => {
  let cases = [];
  let response = null;
  let dailyCases = JSON.parse(fs.readFileSync('test/mock/daily.json', 'utf8'));

  beforeAll(async () => {
    nock(baseUrl()).get('/api/daily').reply(200, dailyCases);

    response = await axios.get(`${baseUrl()}/api/daily`);
    cases = response.data;
  });

  it('should respond with success', () => {
    expect(response.status).toBe(200);
  });

  it('should return a truthy value', () => {
    expect(cases).toBeTruthy();
  });

  it('should contain item of array which greater than 300', () => {
    expect(cases.length).toBeGreaterThan(300);
  });

  it('should return a list of object with correct property', () => {
    const length = cases.length;
    const randomIndex = Math.floor(Math.random() * (length + 1));
    const randomCase = cases[randomIndex];

    expect(randomCase).toHaveProperty('key');
    expect(randomCase).toHaveProperty('positive');
    expect(randomCase).toHaveProperty('active');
    expect(randomCase).toHaveProperty('recover');
    expect(randomCase).toHaveProperty('death');
    expect(randomCase).toHaveProperty('positive_cumulative');
    expect(randomCase).toHaveProperty('active_cumulative');
    expect(randomCase).toHaveProperty('recover_cumulative');
    expect(randomCase).toHaveProperty('death_cumulative');
    expect(randomCase).toHaveProperty('last_update');
    expect(randomCase).toHaveProperty('date_time');
  });

  it('should return a list of object with correct property type', () => {
    const length = cases.length;
    const randomIndex = Math.floor(Math.random() * (length + 1));
    const randomCase = cases[randomIndex];

    expect(typeof randomCase.key).toBe('number');
    expect(typeof randomCase.positive).toBe('number');
    expect(typeof randomCase.active).toBe('number');
    expect(typeof randomCase.recover).toBe('number');
    expect(typeof randomCase.death).toBe('number');
    expect(typeof randomCase.positive_cumulative).toBe('number');
    expect(typeof randomCase.active_cumulative).toBe('number');
    expect(typeof randomCase.recover_cumulative).toBe('number');
    expect(typeof randomCase.death_cumulative).toBe('number');
    expect(typeof randomCase.last_update).toBe('number');
    expect(typeof randomCase.date_time).toBe('string');
  });
});

describe('/api/daily negative test', () => {
  it('should return response when server error', async () => {
    nock(baseUrl())
      .get('/api/daily')
      .reply(500, { message: 'Something went wrong' });

    try {
      await axios.get(`${baseUrl()}/api/daily`);
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.response.data.message).toEqual('Something went wrong');
    }
  });
});
