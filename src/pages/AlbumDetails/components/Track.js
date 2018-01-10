import React from 'react';

export const Track = props => (
  <div className="Track-Item">
    <div>
      <strong>{props.trackName}</strong>
    </div>
    <div className="Track-Item__inner">
      {(props.trackTimeMillis / 60000).toFixed(2).replace('.', ':')}
      <audio controls>
        <source src={props.previewUrl} type="audio/aac" />
      </audio>
    </div>
  </div>
);
