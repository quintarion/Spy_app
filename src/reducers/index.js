import { combineReducers } from 'redux'
import fetch_data from "./FetchPerson"


// Combine tout les reducers dans une seul fonction qui est combineReducers
 const RootReducers = combineReducers({
    persons: fetch_data
  })

  export default RootReducers