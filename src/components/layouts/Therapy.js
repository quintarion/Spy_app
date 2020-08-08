import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import Iframe from 'react-iframe';
import './Therapy.scss';

class Therapy extends Component {
  state = {
    hideVideo: true,
  }

//Adding an event listener after mounting the components
componentDidMount() { 
  window.addEventListener("resize", this.resize.bind(this)); 
  this.resize(); 
} 

resize() { 
  this.setState({hideVideo: window.innerWidth <= 800}); 
} 

render() {
  return (
    <div className="layout-therapy">
      { this.props.elements.map((element, index) =>
      <div key={index} className="layout-therapy_container">
      <div className="layout-therapy_container-text">
        <h2>{element.title}</h2>
        <h3>{element.subtitle}</h3>
        <p>
          {element.text}
        </p>
          <NavLink activeClassName="selected" to={element.innerpath}>{element.innerpage}</NavLink>
          <a href={element.path} target='_blanck' rel="nofollow noreferrer noopener">{element.page}</a>
      </div>

      <div className="layout-therapy_container">
      {
      (this.state.hideVideo)? 
      <img src={element.img} className="layout-icon" alt={element.alt} id="picture"/> 
        :
        <div className="video">
        <Iframe 
        url={element.iframe} 
        id="video"
        width="450px"
        height="450px"
        display="initial"
        position="relative"
        /> 
        </div>
        ||
        <img src={element.img} className="layout-icon" alt={element.alt} id="picture"/>
      }
      </div>
    </div>
    )}
    </div>
    );
  }
}

export default Therapy;