import React from "react";
import PropTypes from "prop-types";
import { AlbumItem } from "./AlbumItem";

export const AlbumList = props => (
  <ul className="Album-List">
    {props.collections.map(collection => (
      <li key={collection.collectionId}>
        <AlbumItem {...collection} />
      </li>
    ))}
  </ul>
);

AlbumList.propTypes = {
  collections: PropTypes.any.isRequired
};
