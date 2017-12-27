import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AlbumSearchForm, AlbumList } from './album/'
import { fetchCollections } from '../actions/home.actions';

export class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    if (this.props.collections.length === 0) {
      dispatch(fetchCollections('Ray Charles'))
    }
  }

  render() {
    return (
      <div>
        <AlbumSearchForm
          handleInputChange={this.props.handleInputChange}
          handleInputFocus={this.props.handleInputFocus}
          searchTerm={this.props.searchTerm} />

        {this.props.collections &&
          <AlbumList collections={this.props.collections} isLoading={this.props.isLoading} />}
      </div>
    );
  }
}

Home.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state.homeReducer
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: evt => {
      evt.persist()
      this._inputTimeout && clearTimeout(this._inputTimeout)
      this._inputTimeout = setTimeout(() => {
        dispatch(fetchCollections(evt.target.value))
      }, 300)
    },
    handleInputFocus: evt => {
      evt.target.value = ''
    },
    dispatch
  }
}

const HomeComponent = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeComponent;
