import React from 'react';
import Adult from './components/cathegories/Adult';
import Career from './components/about/Career';
import Who from './components/cathegories/Who';
import Child from './components/cathegories/Child';
import Couple from './components/cathegories/Couple';
import Footer from './components/footer/Footer';
import Gretting from './components/gretting/Gretting';
import Header from './components/header/Header';
import Training from './components/about/Training';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="site-header"><Header/></div>
      <div className="site-content">
        <Gretting/>
        <Who/>
        <Training/>
        <Career/>
        <Adult/>
        <Couple/>
        <Child/>
      </div>
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
