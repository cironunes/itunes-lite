import { homeReducer } from './home.reducer'
import { GET_COLLECTIONS, GET_COLLECTIONS_SUCCESS } from '../actions/home.actions';

describe('Reducer: Home', () => {

  describe('GET_COLLETIONS:', () => {
    test('request for collections by search term', () => {
      const result = homeReducer({}, {type: GET_COLLECTIONS, searchTerm: 'foo'})
      expect(result).toEqual({ isLoading: true, searchTerm: 'foo' })
    })
  })

  describe('GET_COLLETIONS_SUCCESS', () => {
    test('fills collections per searchTerm', () => {
      const result = homeReducer({}, {
        type: GET_COLLECTIONS_SUCCESS,
        collections: [1, 2, 3],
        searchTerm: 'nice'
      })
      expect(result).toEqual({
        collections: [1, 2, 3],
        searchTerm: 'nice',
        isLoading: false
      })
    })
  })

})