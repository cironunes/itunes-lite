export const searchAlbumByTerm = (term) => {
  return window.fetch(`https://itunes.apple.com/search?entity=album&term=${term}`);
};
