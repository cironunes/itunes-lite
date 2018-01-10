import React from 'react';
import PropTypes from 'prop-types';
import { AlbumItem } from '../AlbumItem';
import Loading from '../../../../common/components/Loading';

export const AlbumList = props => (
  <div>
    {props.isLoading ? (
      <div className="Loading">
        <Loading />
      </div>
    ) : (
      <ul className="Album-List">
        {props.collections.map(collection => (
          <li key={collection.collectionId}>
            <AlbumItem {...collection} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

AlbumList.propTypes = {
  collections: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};
