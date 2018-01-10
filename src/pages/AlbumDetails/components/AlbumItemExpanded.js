import React from 'react';
import PropTypes from 'prop-types';

export const AlbumItemExpanded = props => (
  <div className="Card Card-Expanded">
    <img className="Media-Cover" src={props.artworkUrl100} alt="" />
    <div>
      <h1 className="Media-Text Media-Title">
        {props.collectionName.length >= 100
          ? `${props.collectionName.substring(0, 100)}...`
          : props.collectionName}
      </h1>
      <h2 className="Media-Text Media-Author">
        {props.artistName.length >= 100
          ? `${props.artistName.substring(0, 100)}...`
          : props.artistName}
      </h2>
      <span className="Media-Text Media-Date">
        {new Date(props.releaseDate).getFullYear()}
      </span>
    </div>
  </div>
);

AlbumItemExpanded.propTypes = {
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};
