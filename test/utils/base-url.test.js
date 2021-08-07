import baseUrl from '../../utils/base-url';

describe('base url should correct', () => {
  it('development url', async () => {
    const expected = 'http://localhost:4000';
    const actual = baseUrl();

    expect(expected).toEqual(actual);
  });
});
