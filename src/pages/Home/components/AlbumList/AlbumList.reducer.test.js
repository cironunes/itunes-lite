import { albumList } from './AlbumList.reducer';
import {
  GET_COLLECTIONS,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_ERROR
} from './AlbumList.actions';

describe('Reducer: Home', () => {
  describe('GET_COLLETIONS:', () => {
    test('Request for collections by search term should trigger loading', () => {
      const result = albumList({}, { type: GET_COLLECTIONS, searchTerm: null });

      expect(result).toEqual({ isLoading: true });
    });
  });

  describe('GET_COLLETIONS_SUCCESS', () => {
    test('Fills collections per searchTerm with the expected results and sets isLoading to false', () => {
      const result = albumList(
        {},
        {
          type: GET_COLLECTIONS_SUCCESS,
          collections: [1, 2, 3]
        }
      );

      expect(result).toEqual({
        collections: [1, 2, 3],
        isLoading: false
      });
    });
  });

  describe('GET_COLLETIONS_ERROR:', () => {
    test('An error in request should reset to original state', () => {
      const result = albumList({}, { type: GET_COLLECTIONS_ERROR, err: null });

      expect(result).toEqual({ isLoading: false, collections: [] });
    });
  });
});
