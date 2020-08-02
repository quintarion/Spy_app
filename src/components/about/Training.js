import React from "react";
import { NavLink } from "react-router-dom";
import Layout from '../layouts/Layout';
import woman from '../../assets/pictures/woman.jpg';
import './Training.scss';

const elements = [
    {
    title: "Ma formation",
    text: [<ul>
            <li>Diplôme d'Etat d'infrimière</li>
            <li>Formée à la <NavLink to="reflexology" target="_blank">réflexologie polarisée</NavLink> (1993)</li>
            <li>Formée aux soins palliatifs (1998)</li>
            <li>Master 2 de Psychologie Clinique (2007)</li>
            <li>Praticienne <NavLink to="/emdr" target="_blank">EMDR</NavLink> (<i>Eye Mouvement Desensitization et Reprocessing</i>) (2009)</li>
            <li>Praticienne EMDR enfants-adolescents (2010)</li>
            <li>Formée au traitement de  la dissociation structurelle (2011)</li>
            <li>Formée à l' <NavLink to="/icv" target="_blank">ICV</NavLink> (<i>Intégration des Cycles de la Vie</i>)</li>
            <ul>
                <li>ICV niveau 1 (2013)</li>
                <li>ICV niveau 2 (2014)</li>
                <li>ICV niveau 3 (2018)</li>
            </ul>
            <li>Formation à la prise en charge des psycho-traumatismes transgénérationnels (2019)</li>        
            <li>Formation ICV pour enfants et adolescents (2020)</li>
        </ul>],
    img: woman,
    alt: "",
    path: "#career",
    page: "Mon parcours",
    }
];

const Training = () => {
    return (
        <section className="training" id="training">
            <Layout elements={elements}/>
        </section>
    )
}

export default Training;