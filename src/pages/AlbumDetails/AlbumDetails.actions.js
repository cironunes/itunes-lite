import { getAlbumById } from '../../common/services/ItunesService';

export const GET_ALBUM = 'GET_ALBUM';
export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
export const GET_ALBUM_ERROR = 'GET_ALBUM_ERROR';

export const getAlbum = () => ({ type: GET_ALBUM });

export const getAlbumSuccess = (collection, tracks) => ({
  type: GET_ALBUM_SUCCESS,
  collection,
  tracks
});

export const getAlbumError = err => ({ type: GET_ALBUM_ERROR, err });

export const fetchAlbum = album => async dispatch => {
  dispatch(getAlbum());
  try {
    let results = await getAlbumById(album);
    results = await results.json();
    results = results.results;
    dispatch(getAlbumSuccess(results[0], results.slice(1, results.length)));
  } catch (err) {
    dispatch(getAlbumError(err));
  }
};
