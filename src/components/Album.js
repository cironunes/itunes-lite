import React, { Component } from "react";

import { AlbumItemExpanded } from "./album/AlbumItemExpanded";
import { Track } from "./track/Track";

export class Album extends Component {
  state = {
    tracks: []
  };

  componentDidMount() {
    fetch(`https://itunes.apple.com/lookup?entity=song&id=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(({ results }) =>
        this.setState({
          collection: results[0],
          tracks: results.slice(1, results.length)
        })
      );
  }
  render() {
    return (
      <div>
        {this.state.collection && (
          <AlbumItemExpanded
            {...this.state.collection}
          />
        )}

        <ol className="Tracks">
          {this.state.tracks.map(track => (
            <li key={track.trackId}>
              <Track {...track} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
