import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const AlbumItem = props => (
  <Link className="Card" to={`/album/${props.collectionId}`}>
    <img className="Media-Cover" src={props.artworkUrl100} alt="" />
    <h1 className="Media-Text Media-Title">
      {props.collectionName.length >= 100
        ? `${props.collectionName.substring(0, 100)}...`
        : props.collectionName}
    </h1>
    <h2 className="Media-Text Media-Author ellipsis">{props.artistName}</h2>
    <span className="Media-Text Media-Date">
      {new Date(props.releaseDate).getFullYear()}
    </span>
  </Link>
);

AlbumItem.propTypes = {
  collectionId: PropTypes.number.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};
