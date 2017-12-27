import { searchAlbumByTerm } from '../services/ItunesService'

export const GET_COLLECTIONS = 'GET_COLLECTIONS'
export const GET_COLLECTIONS_SUCCESS = 'GET_SUCCESS'

export function getCollections(searchTerm) {
  return { type: GET_COLLECTIONS, searchTerm }
}

export function getCollectionsSuccess(searchTerm, collections) {
  return { type: GET_COLLECTIONS_SUCCESS, collections, searchTerm }
}

export function fetchCollections(searchTerm) {
  return function(dispatch) {
    dispatch(getCollections(searchTerm))
    return searchAlbumByTerm(searchTerm)
      .then(response => response.json())
      .then(({results}) => {
        dispatch(getCollectionsSuccess(searchTerm, results))
      })
  }
}
