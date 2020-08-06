import React from 'react';
import Layout from '../layouts/Layout';
import fulllength from '../../assets/pictures/full-length.jpg';
import './Home.scss';

const elements = [
    {
    title: "Bienvenue",
    text: [<p>Bonjour, je m’appelle Hélène Quintana-Fauré, je suis <strong>Psychologue Clinicienne-Psychothérapeute</strong> et sur ce site je vais tenter de vous présenter  les modalités pratiques pour suivre une psychothérapie, mes différentes approches  thérapeutiques et mon positionnement « <i>humain</i> ».</p>],
    img: fulllength,
    alt: "",
    path: "#career",
    page: "A propos",
    }
];

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="home-title">
                <h1>Hélène QUINTANA-FAUR&Eacute;<br/><span>PSYCHOLOGUE CLINICIENNE - PSYCHOTH&Eacute;RAPEUTE</span></h1>
            </div>
            <Layout elements={elements}/>
        </div>
    )
}

export default Home;