import React from 'react';
import LayoutSection from '../layouts/LayoutSection';
import fulllength from '../../assets/pictures/full-length.jpg';
import './Gretting.scss';

const elements = [
    {
    title: "Bienvenue",
    text: [<p>Bonjour, je m’appelle Hélène Quintana-Fauré, je suis <strong>Psychologue Clinicienne-Psychothérapeute</strong> et sur ce site je vais tenter de vous présenter  les modalités pratiques pour suivre une psychothérapie, mes différentes approches  thérapeutiques et mon positionnement « <i>humain</i> ».</p>],
    img: fulllength,
    alt: "",
    path: "#about",
    page: "A propos",
    }
];

const Gretting = () => {
    return (
        <div className="gretting" id="gretting">
            <div className="gretting-title">
                <h1>Hélène QUINTANA-FAUR&Eacute;<br/><span>PSYCHOLOGUE CLINICIENNE - PSYCHOTH&Eacute;RAPEUTE</span></h1>
            </div>
            <LayoutSection elements={elements}/>
        </div>
    )
}

export default Gretting;