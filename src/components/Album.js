import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AlbumItemExpanded } from "./album/AlbumItemExpanded"
import { Track } from "./track/Track";
import { fetchAlbum } from "../actions/album.actions";
import Loading from '../components/Loading'

export class Album extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAlbum(this.props.match.params.id))
  }

  render() {
    return (
      <div>
        { this.props.isLoading && <Loading /> }
        { !this.props.isLoading && <div>
          {this.props.collection && (
            <AlbumItemExpanded
              {...this.props.collection}
            />
          )}
          <ol className="Tracks">
            {this.props.tracks && this.props.tracks.map(track => (
              <li key={track.trackId}>
                <Track {...track} />
              </li>
            ))}
          </ol>
        </div> }
      </div>
    );
  }
}

Album.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tracks: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return state.albumReducer
}

const AlbumComponent = connect(mapStateToProps)(Album)

export default AlbumComponent
