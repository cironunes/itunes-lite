import { getAlbumById } from "../services/ItunesService";

export const GET_ALBUM = 'GET_ALBUM'
export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS'

export function getAlbum(track) {
  return { type: GET_ALBUM, track }
}

export function getAlbumSuccess(collection, tracks) {
  return { type: GET_ALBUM_SUCCESS, collection, tracks }
}

export function fetchAlbum(album) {
  return (dispatch) => {
    dispatch(getAlbum(album))
    getAlbumById(album)
      .then(response => response.json())
      .then(({ results }) => {
        dispatch(getAlbumSuccess(results[0], results.slice(1, results.length)))
      })
  }
}
