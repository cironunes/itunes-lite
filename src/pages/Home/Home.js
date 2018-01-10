import React from 'react';
import AlbumSearchForm from './components/AlbumSearchForm';
import AlbumListContainer from './components/AlbumList/AlbumListContainer';

const Home = () => (
  <div>
    <AlbumSearchForm />
    <AlbumListContainer />
  </div>
);

export default Home;
