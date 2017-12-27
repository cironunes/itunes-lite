import { combineReducers } from 'redux'

import { homeReducer } from './home.reducer'
import { albumReducer } from './album.reducer'

const rootReducer = combineReducers({
  homeReducer,
  albumReducer
})

export default rootReducer