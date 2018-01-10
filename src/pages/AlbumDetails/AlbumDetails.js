import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../../common/components/Loading';
import { AlbumItemExpanded } from './components/AlbumItemExpanded';
import { Track } from './components/Track';

export const AlbumDetails = props => (
  <div>
    {props.isLoading ? (
      <div className="Loading">
        <Loading />
      </div>
    ) : (
      <div>
        {props.collection && <AlbumItemExpanded {...props.collection} />}
        <ol className="Tracks">
          {props.tracks.map(track => (
            <li key={track.trackId}>
              <Track {...track} />
            </li>
          ))}
        </ol>
      </div>
    )}
  </div>
);

AlbumDetails.propTypes = {
  tracks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};
