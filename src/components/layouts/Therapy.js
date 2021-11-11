import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import Iframe from 'react-iframe';
import './Therapy.scss';

class Therapy extends Component {
  state = {
    hideVideo: true,
    closeWarning : false
  }

//Adding an event listener after mounting the components
componentDidMount() { 
  window.addEventListener("resize", this.resize.bind(this)); 
  this.resize(); 
} 

resize() { 
  this.setState({hideVideo: window.innerWidth <= 800}); 
} 

handleClick = (event) => {    
  event.preventDefault();
  this.setState(state => ({ closeWarning: !state.closeWarning }));  
}

render() {
  return (
    <div className="layout-therapy">
      {this.props.elements.map((element, index) =>
      <div key={index} className="layout-therapy_container">
        <div className="layout-therapy_container-text">
          <h2>{element.title}</h2>
          <h3>{element.subtitle}</h3>
          {element.text}
          <div>
            <NavLink activeClassName="selected" to={element.innerpath}>{element.innerpage}</NavLink>
            <a href={element.path} target='_blanck' rel="nofollow noreferrer noopener">{element.page}</a>
          </div>
        </div>

      <div className="layout-therapy_container">
      {
        (this.state.hideVideo)? 
        <img src={element.img} className="layout-icon" alt={element.alt} id="picture"/> 
        :
        <div className="video">

          <div className={this.state.closeWarning ? "video-warning_close" : "video-warning" }>
            
            <div id="video-warning">
              <p>YouTube conditionne la lecture de ses vidéos au dépôt de traceurs afin de vous proposer de la publicité ciblée en fonction de votre navigation.<br/>
              Pour plus d’information, visitez la politique<br/>
              <a href="https://policies.google.com/privacy?hl=fr&gl=fr" target="_blank" rel="nofollow noreferrer noopener">« cookies » de YouTube</a>
              </p>
              <div onClick={(event)=>this.handleClick(event)} role="button">
                <span className="close"><i className="fa fa-times" aria-hidden="true"></i></span>
              </div>
            </div>

            <Iframe 
              url={element.iframe} 
              id="video"
            />
          </div>
          
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