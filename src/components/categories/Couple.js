import React from 'react';
import Brand from '../layouts/Brand';
import {NavLink} from 'react-router-dom';
import Prices from '../layouts/Prices';
import Category from '../layouts/Category';
import couple from '../../assets/pictures/couple.jpg';
import './Couple.scss';

const elements = [
    {
        title: "Couples",
        img: couple,
        paragraph1: 'Lors de la première séance je reçois le couple ensemble pendant une heure trente (60 €).',
        paragraph2: [<div><span>Si les deux membres du couple sont prêts à poursuivre, je proposerai des séances programmées selon ce qui me paraît le plus adapté soit :</span>
        <ul>
        <br/>
            <li> <b>D’une thérapie</b> <NavLink to="/emdr" target="_blank" rel="nofollow noreferrer noopener"><strong>EMDR</strong></NavLink> de couple c’est à dire que les deux personnes assistent toujours  ensemble aux séances qui après "<i>l’ancrage du Lieu Sûr</i>", se décomposeront ainsi : séances de 2h (120 €)</li>
                <ul>
                    <li> Echange pendant 15 minutes</li>
                    <li> 3/4 d'heure d'<NavLink to="/emdr" target="_blank" rel="nofollow noreferrer noopener"><strong>EMDR</strong></NavLink> devant l’autre membre du couple qui observe avec bienveillance et en silence.</li>
                    <li> 3/4 d heure pour l’autre personne dans les même conditions.</li>
                    <li> Echange pendant 15 minutes.</li>
                </ul>
            <br/>
            <li>- <b>D’une thérapie</b> <NavLink to="/icv" target="_blank" rel="nofollow noreferrer noopener"><strong>ICV</strong></NavLink> : chaque personne effectue deux séances d’une heure chacune d’ ICV seule (60 €) en alternance avec son conjoint.</li>
        </ul>
      </div>],
        paragraph3: [<span>Au bout des 4 séances effectuées en alternance, on se retrouve pour une séance commune d’une heure  (60 €) et à l’issue de cette séance , nous évalueront ensemble si  les deux membres du couple sont d’accord pour poursuivre  une deuxième série de 5 séances (4 séances d’ <NavLink to="/icv" target='_blank' rel="nofollow noreferrer noopener">ICV</NavLink> ,une d’évaluation )</span>],
        path: "/#contact",
        page: "Contact"
    }
];

const cells = [
    {
        name: "première séance",
        duration: "1h30",
        price: "60 €"
    },
    {
        name: "en couple",
        duration: "2h",
        price: "120 €"
    },
    {
        name: "individuelle",
        duration: "1h",
        price: "60 €"
    }
];

const Couple = () => {
    return (
        <>
            <Brand/>
            <section className="couple pageCategory" id="couple">
                <h2>En couple</h2>
                <div className="pageCategory_box">
                    <Category elements={elements} />
                    <Prices cells={cells} />
                </div>
            </section>
        </>
    )
}

export default Couple;