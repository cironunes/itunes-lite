import { searchAlbumByTerm } from './ItunesService';

const json = { json: () => ({ results: [1, 2, 3] }) };

fetch = jest
  .fn()
  .mockImplementation(() => new Promise(resolve => resolve(json)));

describe('Service: Itunes', () => {
  test('Search album by term', async () => {
    const response = await searchAlbumByTerm('jack');
    const result = await response.json();

    expect(result.results).toMatchSnapshot();
  });
});
