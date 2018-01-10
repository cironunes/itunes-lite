import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollections } from './AlbumList/AlbumList.actions';

class AlbumSearchForm extends Component {
  handleInputFocus = evt => (evt.target.value = '');

  render = () => (
    <form className="App-form">
      <h2 className="App-subtitle">Have fun!</h2>
      <p className="App-form__hint">
        Find your favorite albums and get to know more about them
      </p>
      <div className="SearchForm">
        <input
          className="App-form__field"
          type="search"
          placeholder="Search for albums"
          onChange={this.props.handleInputChange}
          onClick={this.handleInputFocus}
          autoFocus
        />
      </div>
    </form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: evt => {
      evt.persist();
      this._inputTimeout && clearTimeout(this._inputTimeout);
      this._inputTimeout = setTimeout(
        () => dispatch(fetchCollections(evt.target.value)),
        300
      );
    }
  };
};

export default connect(null, mapDispatchToProps)(AlbumSearchForm);
