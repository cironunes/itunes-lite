import {
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR
} from './AlbumDetails.actions';

const initialAlbumState = {
  collection: null,
  tracks: [],
  isLoading: false
};

export const albumDetails = (state = initialAlbumState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return { ...state, isLoading: true };
    case GET_ALBUM_SUCCESS:
      return {
        isLoading: false,
        collection: action.collection,
        tracks: action.tracks
      };
    case GET_ALBUM_ERROR:
      return { collection: null, tracks: [], isLoading: false };
    default:
      return state;
  }
};
