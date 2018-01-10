import { combineReducers } from 'redux';
import { albumList } from '../pages/Home/components/AlbumList/AlbumList.reducer';
import { albumDetails } from '../pages/AlbumDetails/AlbumDetails.reducer';

export default combineReducers({
  albumList,
  albumDetails
});
