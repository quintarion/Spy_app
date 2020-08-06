import React from 'react';
import Subcathegory from '../layouts/Subcathegory';
import maya_2 from '../../assets/icons/maya_2.png';
import trust from '../../assets/icons/trust.png';
import raincoat from '../../assets/icons/raincoat.png';
import './Therapies.scss';

const elements = [
    {
    class: "one",
    img: trust,
    alt: "",
    title: "E.M.D.R",
    text: "L'EMDR (Eye Mouvement Desensitization et Reprocessing) est une méthode, qui permet une résolution rapide des symptômes liés à des blocages consécutifs à des événements vécus de façon douloureuse . . .",
    path: "/emdr",
    page: "En savoir plus sur l'EMDR",
    },
    {
    class: "two",
    img: raincoat,
    alt: "",
    title: "I.C.V",
    text: "L’ICV (Intégration des Cycles de la Vie) permet la « digestion » des émotions du passé en connectant des réseaux de neurones les uns aux autres afin de dater les événements passés et faire en sorte que le corps n’y réagisse plus malgré nous . . .",
    path: "/icv",
    page: "En savoir plus sur l'ICV",
    },
    {
    class: "three",
    img: maya_2,
    alt: "",
    title: "E.F.T",
    text: "EFT (Emotional Freedom Technique), il s'agit de tapoter certains points spécifiques situés sur nos méridiens . . .",
    path: "/eft",
    page: "En savoir plus sur l'E.F.T",
    },
];

const Therapies = () => {
    return (
        <div className="therapies" id="therapies">
            <div className="therapies__container">
                <h2>Quelles sont  les techniques que j’utilise ?</h2>
                <div className="therapies__flex">
                    <Subcathegory elements={elements}/>
                </div>
            </div>
        </div>
    )
}

export default Therapies;