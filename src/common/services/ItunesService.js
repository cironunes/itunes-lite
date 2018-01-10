const BASE_URL = 'https://itunes.apple.com';

export const searchAlbumByTerm = term =>
  window.fetch(`${BASE_URL}/search?entity=album&term=${term}`);

export const getAlbumById = id =>
  window.fetch(`${BASE_URL}/lookup?entity=song&id=${id}`);
