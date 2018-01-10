import { albumDetails } from './AlbumDetails.reducer';
import {
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR
} from './AlbumDetails.actions';

describe('Reducer: Album', () => {
  describe('GET_ALBUM', () => {
    test('Requests for an album should trigger loading', () => {
      const result = albumDetails({}, { type: GET_ALBUM });

      expect(result).toEqual({
        isLoading: true
      });
    });
  });

  describe('GET_ALBUM_SUCCESS', () => {
    test('Returns the loaded collection and its tracks', () => {
      const result = albumDetails(
        {},
        {
          type: GET_ALBUM_SUCCESS,
          collection: { name: 'Jack' },
          tracks: [1, 2, 3]
        }
      );

      expect(result).toEqual({
        collection: { name: 'Jack' },
        tracks: [1, 2, 3],
        isLoading: false
      });
    });
  });

  describe('GET_ALBUM_ERROR:', () => {
    test('An error in request should reset to original state', () => {
      const result = albumDetails({}, { type: GET_ALBUM_ERROR, err: null });

      expect(result).toEqual({
        isLoading: false,
        collection: null,
        tracks: []
      });
    });
  });
});
