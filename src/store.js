import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; //Redux Middleware
import { fetchAllPersons, select_person } from './actions/rootActions.js';
import RootReducers from './reducers';

const middleware = [thunk];

const store = createStore (
  RootReducers, 
  compose(
  //applyMiddleware(thunk),
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
)
store.dispatch(fetchAllPersons(), select_person());

export default store;