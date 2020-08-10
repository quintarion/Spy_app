import { combineReducers } from 'redux';
import fetchPerson from './FetchPerson';

// Combine tous les reducers dans une seul fonction qui est combineReducers
 const RootReducers = combineReducers({
    persons: fetchPerson
  })

export default RootReducers;