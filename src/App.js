import React from 'react';
//import ReCAPTCHA from "react-google-recaptcha";
import Adult from './components/cathegories/Adult';
import Career from './components/about/Career';
import Who from './components/cathegories/Who';
import Child from './components/cathegories/Child';
import Contact from './components/contact/Contact';
import Couple from './components/cathegories/Couple';
import Footer from './components/footer/Footer';
import Gretting from './components/gretting/Gretting';
import Header from './components/header/Header';
import Training from './components/about/Training';

import './App.scss';

// const TEST_SITE_KEY = "6Lcla7oZAAAAAIKh5o4dv9HdCYIantCOo5peI0VT";
// const DELAY = 1500;

class App extends React.Component {
//   constructor(props, ...args) {
//     super(props, ...args);
//     this.state = {
//       callback: "not fired",
//       value: "[empty]",
//       load: false,
//       expired: "false"
//     };
//     this._reCaptchaRef = React.createRef();
//   }

//   handleChange = value => {
//     console.log("Captcha value:", value);
//     this.setState({ value });
//     /* if value is null recaptcha expired */
//     if (value === null) this.setState({ expired: "true" });
//   };

//   asyncScriptOnLoad = () => {
//     this.setState({ callback: "called!" });
//     console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
//   };

  render() {
    //const { value, callback, load, expired } = this.state || {};
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
          <Contact/>
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

        {/* <h2>
          NOTE: initial load delayed <em>{DELAY / 1000}sec</em> to demonstrate
          callback
        </h2>
        <h3>Recaptcha loaded callback: {callback}</h3>
        <h5>Recaptcha value: {value}</h5>
        <h5>Expired: {expired}</h5>
      
      {load && (
        <ReCAPTCHA
          style={{ display: "inline-block" }}
          theme="dark"
          ref={this._reCaptchaRef}
          sitekey={TEST_SITE_KEY}
          onChange={this.handleChange}
          asyncScriptOnLoad={this.asyncScriptOnLoad}
        />
      )} */}
    </div>
    );
  }
}

export default App;