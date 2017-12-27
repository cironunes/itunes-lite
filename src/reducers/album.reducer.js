import { GET_ALBUM, GET_ALBUM_SUCCESS } from "../actions/album.actions";

const initialAlbumState = {
  tracks: [],
  isLoading: false
}

export const albumReducer = (state = initialAlbumState, action = { type: '' }) => {
  switch(action.type) {
    case GET_ALBUM:
      return { ...state, isLoading: true }
    case GET_ALBUM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collection: action.collection,
        tracks: action.tracks
      }
    default:
      return state
  }
}
