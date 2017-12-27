import { GET_COLLECTIONS, GET_COLLECTIONS_SUCCESS } from '../actions/home.actions'

const initialHomeState = {
  searchTerm: '',
  isLoading: false,
  collections: [],
  track: {}
}

export const homeReducer = (state = initialHomeState, action) => {
  switch(action.type) {
    case GET_COLLECTIONS:
      const { searchTerm } = action
      return { ...state, isLoading: true, searchTerm }
    case GET_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.collections,
        searchTerm: action.searchTerm
      }
    default:
      return state
  }
}

