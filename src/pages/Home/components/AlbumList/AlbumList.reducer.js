import {
  GET_COLLECTIONS,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_ERROR
} from './AlbumList.actions';

const initialHomeState = {
  isLoading: false,
  collections: []
};

export const albumList = (state = initialHomeState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return { ...state, isLoading: true };
    case GET_COLLECTIONS_SUCCESS:
      return { isLoading: false, collections: action.collections };
    case GET_COLLECTIONS_ERROR:
      return { isLoading: false, collections: [] };
    default:
      return state;
  }
};
