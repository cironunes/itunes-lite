import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AlbumDetails } from './AlbumDetails';
import { fetchAlbum } from './AlbumDetails.actions';

class AlbumDetailsContainer extends Component {
  componentDidMount = () =>
    this.props.dispatch(fetchAlbum(this.props.match.params.id));

  render = () => <AlbumDetails {...this.props} />;
}

const mapStateToProps = state => state.albumDetails;

export default connect(mapStateToProps)(AlbumDetailsContainer);
