/* Polyfill must be the first lines of src / index.js */
import 'react-app-polyfill/ie9'; 
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
// Redux
import { Provider } from 'react-redux';
import store from './store.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
