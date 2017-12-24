import React from "react";
import PropTypes from "prop-types";

export const AlbumSearchForm = props => (
  <form className="App-form">
    <h2 className="App-subtitle">Have fun!</h2>
    <p className="App-form__hint">Find your favorite albuns and get to know more about them</p>
    <div className="SearchForm">
      <input
        className="App-form__field"
        type="search"
        placeholder="search for albuns"
        onChange={props.handleInputChange}
        defaultValue={props.searchTerm}
        autoFocus
      />
    </div>
  </form>
);

AlbumSearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
