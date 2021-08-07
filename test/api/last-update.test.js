import 'regenerator-runtime/runtime';
import nock from 'nock';
import baseUrl from '../../utils/base-url';
import fs from 'fs';
import axios from 'axios';

describe('/api/last-update', () => {
  let total = {};
  let response = null;
  let lastUpdate = JSON.parse(
    fs.readFileSync('test/mock/last-update.json', 'utf-8')
  );

  beforeAll(async () => {
    nock(baseUrl()).get('/api/last-update').reply(200, lastUpdate);

    response = await axios.get(`${baseUrl()}/api/last-update`);
    total = response.data;
  });

  it('should respond with success', () => {
    expect(response.status).toBe(200);
  });

  it('should return a truthy value', () => {
    expect(total).toBeTruthy();
  });

  it('should contain properties of object which equal to 5', () => {
    expect(Object.keys(total).length).toEqual(5);
  });

  it('should return an object with correct property', () => {
    expect(total).toHaveProperty('positive');
    expect(total).toHaveProperty('active');
    expect(total).toHaveProperty('cured');
    expect(total).toHaveProperty('death');
    expect(total).toHaveProperty('updated_at');
  });

  it('should return an object with correct property type', () => {
    expect(typeof total.positive).toBe('number');
    expect(typeof total.active).toBe('number');
    expect(typeof total.cured).toBe('number');
    expect(typeof total.death).toBe('number');
    expect(typeof total.updated_at).toBe('string');
  });
});
