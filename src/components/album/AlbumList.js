import React from "react";
import PropTypes from "prop-types";

import { AlbumItem } from "./AlbumItem";
import Loading from '../Loading'

export const AlbumList = props => (
  <div>
    { props.isLoading && <div className="Loading"><Loading /></div> }
    <ul className="Album-List">
      {!props.isLoading && props.collections.map(collection => (
        <li key={collection.collectionId}>
          <AlbumItem {...collection} />
        </li>
      ))}
    </ul>
  </div>
);

AlbumList.propTypes = {
  collections: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired
};
