import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import ReCAPTCHA from "react-google-recaptcha";

import Adult from './components/categories/Adult';
import At from './components/therapies/At';
import Child from './components/categories/Child';
import Couple from './components/categories/Couple';
import Eft from './components/therapies/Eft';
import Emdr from './components/therapies/Emdr';
import Icv from './components/therapies/Icv';
import Main from './pages/Main';
import Reflexology from './components/therapies/Reflexology';
import Sophrology from './components/therapies/Sophrology';

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
        <Router>
          <div>
          <Switch>
            {/* Showcase*/}
            <Route exact path='/' component={Main} />
            {/* Description therapies */}
            <Route exact path='/icv' component={Icv} />
            <Route exact path='/emdr' component={Emdr} />
            <Route exact path='/eft' component={Eft} />
            <Route exact path='/at' component={At} />
            <Route exact path='/reflexology' component={Reflexology} />
            <Route exact path='/sophrology' component={Sophrology} />
            {/* Description clients*/}
            <Route exact path='/adult' component={Adult} />
            <Route exact path='/couple' component={Couple} />
            <Route exact path='/child' component={Child} />
            </Switch>
            </div>
        </Router>    
        
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