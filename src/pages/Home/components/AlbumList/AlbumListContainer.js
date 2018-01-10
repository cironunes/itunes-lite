import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AlbumList } from './AlbumList';
import { fetchCollections } from './AlbumList.actions';

class AlbumListContainer extends Component {
  componentDidMount = () =>
    this.props.dispatch(fetchCollections('Ray Charles'));

  render = () => <AlbumList {...this.props} />;
}

const mapStateToProps = state => state.albumList;

export default connect(mapStateToProps)(AlbumListContainer);
