import React from "react";
import { NavLink } from "react-router-dom";
import Layout from '../layouts/Layout';
import woman from '../../assets/pictures/woman.jpg';
import './Training.scss';

const elements = [
    {
    title: "Domaines d'expertise",
    text: [<ul>
            <li><NavLink to="reflexology" target="_blank" rel="nofollow noreferrer noopener">Réflexologie polarisée</NavLink></li>
            <li><NavLink to="/emdr" target="_blank" rel="nofollow noreferrer noopener">EMDR</NavLink> (<i>Eye Mouvement Desensitization et Reprocessing</i>) tout âge</li>
            <li>Traitement de la dissociation structurelle</li>
            <li><NavLink to="/icv" target="_blank" rel="nofollow noreferrer noopener">ICV</NavLink> (<i>Intégration des Cycles de la Vie</i>) niveau 1-2-3</li>
            <li>Prise en charge des psycho-traumatismes transgénérationnels</li>
        </ul>],
    img: woman,
    alt: "",
    path: "career",
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