import React, { Component } from 'react';

import { AlbumSearchForm, AlbumList } from './album/';
import { searchAlbumByTerm } from '../services/ItunesService';

export class Home extends Component {

  state = {
    searchTerm: 'Iron Maiden',
    collections: []
  }

  componentDidMount() {
    searchAlbumByTerm(this.state.searchTerm)
      .then(res => res.json())
      .then(({ results }) => this.setState({ collections: results }));
  }

  handleInputChange = (evt) => {
    evt.persist();
    this._inputTimeout && clearTimeout(this._inputTimeout);
    this._inputTimeout = setTimeout(() => {
      this.setState({ searchTerm: evt.target.value })
      searchAlbumByTerm(evt.target.value)
        .then(res => res.json())
        .then(({ results }) => this.setState({collections: results}))
    }, 300);
  }


  render() {
    return (
      <div>
        <AlbumSearchForm handleInputChange={this.handleInputChange} searchTerm={this.state.searchTerm} />
        {this.state.collections && <AlbumList collections={this.state.collections} />}
      </div>
    );
  }
}
