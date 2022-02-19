import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Parallax } from 'react-scroll-parallax';
import { arrow } from '../../assets/icons/arrow.svg';
import portrait from '../../assets/pictures/portrait.jpg';
import './Home.scss';

// const elements = [
//     {
//     title: "",
//     text: [<p>Bonjour, je m’appelle Hélène Quintana-Fauré, je suis <strong>Psychologue Clinicienne-Psychothérapeute</strong> et sur ce site je vais tenter de vous présenter  les modalités pratiques pour suivre une psychothérapie, mes différentes approches  thérapeutiques et mon positionnement « <i>humain</i> ».</p>],
//     img: portrait,
//     imgsmall: portrait,
//     alt: "",
//     altsmall: "",
//     path: "#career",
//     page: "A propos",
//     }
// ];

class Home extends Component {

    state = {
        closeCookies : false
    }
    
    handleClick = (event) => {    
      event.preventDefault();
      this.setState(state => ({ closeCookies: !state.closeCookies }));  
    }

    render() {

    return (
        <>
            <section className="home" id="home">
                {/* <div className="home-header">
                    <Header />
                </div> */}
                {/* STATE TO CLOSE COOKIES LEGACY */}
                {/* <div className={this.state.closeCookies ? "cookies_close" : "cookies" }>

                    <div id="cookies">
                        <p>......, visitez la politique de cookies<br/>
                        <a href="https://policies.google.com/privacy?hl=fr&gl=fr" target="_blank" rel="nofollow noreferrer noopener">« cookies » de YouTube</a>
                        </p>
                        <div onClick={(event)=>this.handleClick(event)} role="button">
                            <span className="close"><i className="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div> */}
                <div className="home-title">
                    <h1><span>Hélène Quintana-Fauré</span><br/>
                    PSYCHOLOGUE CLINICIENNE<br/>
                    PSYCHOTH&Eacute;RAPEUTE</h1>
                </div>

                <div className="home-text">
                    <p>Bonjour, je m’appelle Hélène Quintana-Fauré,</p>
                    <p>je suis <strong>Psychologue Clinicienne-Psychothérapeute</strong> et sur ce site je vais tenter de vous présenter les modalités pratiques pour suivre une psychothérapie,
                    mes différentes approches thérapeutiques et mon positionnement « <i>humain</i> ».</p> 
                    <NavLink to="/#information" className="home-text_contact">Prendre rendez-vous [ ici ]</NavLink>
                    
                    {/* <NavLink to="/#information" className="home-text_website"><a hrf=""><img src={arrow} alt=""/></a></NavLink>
                    <img src={arrow} alt=""/> */}
                </div>
                
                <div className="home-img">
                    
                    <Parallax className="custom-class" y={[-25, 20]} tagOuter="figure">
                        <img src={portrait} alt=""/> 
                    </Parallax>
                    
                </div>
                
                
            </section>
        </>
    )}
}

export default Home;