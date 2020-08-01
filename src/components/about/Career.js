import React from "react";
import LayoutSection from '../layouts/LayoutSection';
import myYouth from '../../assets/pictures/myYouth.jpg';
import './Career.scss';

const elements = [
    {
    id: "#career",
    title: "Mon parcours professionnel",
    text: [<ul>
        <li>Auxiliaire de puéricultrice</li>
        <li>Infirmière libérale pendant 20 ans</li>
        <li>Ouverture de mon cabinet de Psychologue janvier 2008</li>
        </ul>],
    img: myYouth,
    alt: "",
    path: "#gretting",
    page: "Accueil",
    }
];

const Career = () => {
    return (
        <section className="career" id="career">
            <LayoutSection elements={elements}/>
        </section>
    )
}

export default Career;