import { albumReducer } from './album.reducer'
import { GET_ALBUM, GET_ALBUM_SUCCESS } from '../actions/album.actions';

describe('Reducer: Album', () => {
  describe('GET_ALBUM', () => {
    test('requests for an album', () => {
      const result = albumReducer({}, { type: GET_ALBUM })
      expect(result).toEqual({
        isLoading: true
      })
    })
  })

  describe('GET_ALBUM_SUCCESS', () => {
    test('returns the loaded collection and its tracks', () => {
      const result = albumReducer(null, {
        type: GET_ALBUM_SUCCESS,
        collection: { name: 'Jack' },
        tracks: [1, 2, 3]
      })
      expect(result).toEqual({
        collection: { name: 'Jack' },
        tracks: [1, 2, 3],
        isLoading: false
      })
    })
  })
})