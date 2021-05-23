import React from 'react';
import Brand from '../layouts/Brand';
import Heading from '../layouts/Heading';
import {HashLink as Link} from 'react-router-hash-link';
import Therapy from '../layouts/Therapy';
import maya_7 from '../../assets/icons/maya_7.png';
import './Sophrology.scss';
import '../../style/main.scss';

export const elements = [
    {
        class: "",
        img: maya_7,
        iframe: "https://www.youtube.com/embed/hfTs4WKdKgs",
        alt: "",
        title: "Relaxation Sophronique",
        subtitle: "",
        text: [<div>
        <p>Avec le <i>«  terpnos logos  »</i>, la relaxation sophronique, s’adresse au système parasympathique et permet une détente  d’où vont émerger des pensées  et visualisations positives.</p>
        <br/><p>Options :</p><br/>
        <ul>
            <li>Je peux, <u><Link className="linkNoStyle" to="/#contact">sur rendez-vous</Link></u> spécifiques dans le cadre  cours d’un travail psychothérapeutique,  proposer des séances d’<Link className="linkNoStyle" to="/icv">ICV</Link> portant sur la vie intra <i>(protocole de l’être céllulaire)</i> en hammam 1h30 (100  €).</li>
            <br/>
            <li>Séances de <i>« travail régressif »</i>, <b>type Watsu</b> (60 € pour une heure).
            <a className="linkNoStyle" href="https://iswatsu.com/fr/le-watsu-c-est-quoi#Therapeutic-benefits-of-Watsu" target="_blank" rel="nofollow noreferrer noopener"> Pour en savoir plus sur le Watsu.</a>
            </li>
        </ul>
        </div>
        ],
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "http://relax.sophro.free.fr/techsoph.htm",
        page: "En savoir plus",
    },
];

const Sophrology = () => {
    return (
        <section className="pageTherapy" id="sophrology">
            <Brand/>
            <Heading img={maya_7} alt="" caption="Sophrologie"/>
            <Therapy elements={elements} />
        </section>
    )
}

export default Sophrology;