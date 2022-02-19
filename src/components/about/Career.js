import React from "react";
import { NavLink } from 'react-router-dom';
import Header from '../header/Header';
import Layout from '../layouts/Layout';
import myYouth from '../../assets/pictures/myYouth.jpg';
import './Career.scss';
//import { Form } from "reactstrap";

const elements = [
    {
    id: "#career",
    title: "Mon parcours professionnel",
    text: [<div>
    <h3>de 2007 à aujourd'hui</h3>
    <br/>
    <ul>
        <li>Auxiliaire de puéricultrice</li>
        <li>Diplôme d'Etat d'infrimière</li>
        <li>Infirmière libérale pendant 20 ans</li>
        <li>Formée à la <NavLink to="reflexology" target="_blank" rel="nofollow noreferrer noopener">réflexologie polarisée</NavLink> (1993)</li>
        <li>Formée aux soins palliatifs (1998)</li>
        <li>Master 2 de Psychologie Clinique (2007)</li>
        <li>Ouverture de mon cabinet de Psychologue janvier 2008</li>
        <li>Praticienne <NavLink to="/emdr" target="_blank" rel="nofollow noreferrer noopener">EMDR</NavLink> (<i>Eye Mouvement Desensitization et Reprocessing</i>) (2009)</li>
        <li>Praticienne EMDR enfants-adolescents (2010)</li>
        <li>Formée au traitement de  la dissociation structurelle (2011)</li>
        <li>Formée à l' <NavLink to="/icv" target="_blank" rel="nofollow noreferrer noopener">ICV</NavLink> (<i>Intégration des Cycles de la Vie</i>)</li>
    <ul>
        <li>ICV niveau 1 (2013)</li>
        <li>ICV niveau 2 (2014)</li>
        <li>ICV niveau 3 (2018)</li>
    </ul>
    <li>Formation à la prise en charge des psycho-traumatismes transgénérationnels (2019)</li>        
    <li>Formation ICV pour enfants et adolescents (2020)</li>
    </ul></div>],
    img: myYouth,
    alt: "",
    path: "/",
    //page: "retour",
    }
];

const Career = () => {
    return (
        <section className="career" id="career">
            <div classname="career-menu sticky-up">
                <Header />
            </div>
            <Layout elements={elements}/>
        </section>
    )
}

export default Career;