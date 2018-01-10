import { searchAlbumByTerm } from '../../../../common/services/ItunesService';

export const GET_COLLECTIONS = 'GET_COLLECTIONS';
export const GET_COLLECTIONS_SUCCESS = 'GET_SUCCESS';
export const GET_COLLECTIONS_ERROR = 'GET_ERROR';

export const getCollections = searchTerm => ({
  type: GET_COLLECTIONS
});

export const getCollectionsSuccess = collections => ({
  type: GET_COLLECTIONS_SUCCESS,
  collections
});

export const getCollectionsError = err => ({
  type: GET_COLLECTIONS_ERROR,
  err
});

export const fetchCollections = searchTerm => async dispatch => {
  dispatch(getCollections());
  try {
    let results = await searchAlbumByTerm(searchTerm);
    results = await results.json();
    results = results.results;
    dispatch(getCollectionsSuccess(results));
  } catch (err) {
    dispatch(getCollectionsError(err));
  }
};
