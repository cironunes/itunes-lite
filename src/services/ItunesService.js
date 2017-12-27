export const searchAlbumByTerm = (term) => {
  return window.fetch(`https://itunes.apple.com/search?entity=album&term=${term}`);
};

export const getAlbumById = (id) => {
  return window.fetch(`https://itunes.apple.com/lookup?entity=song&id=${id}`)
}
