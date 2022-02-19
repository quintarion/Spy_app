import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../header/Header';
import Category from '../layouts/Category';
import kiss from '../../assets/icons/noun_the kiss.png';
import './Adult.scss';
import '../../style/main.scss';

const elements = [
    {
        title: "Couples",
        img: "",
        float: kiss,
        paragraph1: '',
        paragraph2: [<div><p>Lors de la première séance je reçois le couple ensemble pendant une heure trente (60 €).<br/>Si les deux membres du couple sont prêts à poursuivre, je proposerai des séances programmées selon ce qui me paraît le plus adapté soit :</p>
        <ul>
            <li>D’une thérapie <NavLink to="/emdr" target="_blank" rel="nofollow noreferrer noopener"><strong>EMDR</strong></NavLink> de couple c’est à dire que les deux personnes assistent toujours  ensemble aux séances qui après "<b><i>l’ancrage du Lieu Sûr</i></b>" , se décomposeront ainsi : séances de 2h (120 €)</li>
                <ul>
                    <li>Echange pendant 15 minutes</li>
                    <li>3/4 d'heure d'<NavLink to="/emdr" target="_blank" rel="nofollow noreferrer noopener"><strong>EMDR</strong></NavLink> devant l’autre membre du couple qui observe avec bienveillance et en silence.</li>
                    <li>3/4 d heure pour l’autre personne dans les même conditions.</li>
                    <li>Echange pendant 15 minutes.</li>
                </ul>
            <li>D’une thérapie <NavLink to="/icv" target="_blank" rel="nofollow noreferrer noopener"><strong>ICV</strong></NavLink> : chaque personne effectue deux séances d’une heure chacune d’ ICV seule (60 €) en alternance avec son conjoint.</li>
        </ul>
        </div>],
        paragraph3: [<p>Au bout des 4 séances effectuées en alternance, on se retrouve pour une séance commune d’une heure (60 €) et à l’issue de cette séance, nous évalueront ensemble si  les deux membres du couple sont d’accord pour poursuivre une deuxième série de 5 séances (4 séances d’ <NavLink to="/icv" target='_blank' rel="nofollow noreferrer noopener">ICV</NavLink>, une d’évaluation )</p>],
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "couplePrice",
        page: "Tarifs"
    }
];

const Couple = () => {
    return (
        <>
            <div className="sticky-up">
                <Header/>
            </div>
            <section className="pageTherapy" id="adult">
                <Category elements={elements}  />
            </section>
        </>
    )
}

export default Couple;