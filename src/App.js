import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

//library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <div className="site-header"><Header/></div>
      <div className="site-content"></div>
      <div className="site-footer"><Footer/></div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
