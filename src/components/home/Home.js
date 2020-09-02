import React from 'react';
import Layout from '../layouts/Layout';
import fulllength from '../../assets/pictures/full-length.jpg';
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

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-title">
                <h1>H&Eacute;L&Egrave;NE QUINTANA-FAUR&Eacute;<br/>
                PSYCHOLOGUE CLINICIENNE<br/>
                PSYCHOTH&Eacute;RAPEUTE</h1>
            </div>
            <div>
                <p>Bonjour, je m’appelle Hélène Quintana-Fauré,</p>
                <p>je suis <strong>Psychologue Clinicienne-Psychothérapeute</strong> et sur ce site je vais tenter de vous présenter les modalités pratiques pour suivre une psychothérapie,</p>
                <p>mes différentes approches thérapeutiques et mon positionnement « <i>humain</i> ».</p>
            </div>
            <img src={portrait} alt=""/>
        </section>
    )
}

export default Home;