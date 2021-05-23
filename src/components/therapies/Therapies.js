import React from 'react';
import Subcathegory from '../layouts/Subcategory';
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
    text: [<p>L'EMDR (Eye Mouvement Desensitization et Reprocessing) est une méthode, qui permet une résolution rapide des symptômes liés à des blocages consécutifs à des événements vécus de façon douloureuse . . .</p>],
    path: "/emdr",
    page: "[...]",
    },
    {
    class: "two",
    img: raincoat,
    alt: "",
    title: "I.C.V",
    text: [<p>L’ICV (Intégration des Cycles de la Vie) permet la « digestion » des émotions du passé en connectant des réseaux de neurones les uns aux autres afin de dater les événements passés et faire en sorte que le corps n’y réagisse plus malgré nous . . .</p>],
    path: "/icv",
    page: "[...]",
    },
    {
    class: "three",
    img: maya_2,
    alt: "",
    title: "E.F.T",
    text: [<p>EFT (Emotional Freedom Technique), il s'agit de tapoter certains points spécifiques situés sur nos méridiens [...]</p>],
    path: "/eft",
    page: "[...]",
    },
];

const Therapies = () => {
    return (
        <div className="therapies" id="therapies">
            <div className="therapies_container">
                <h2>Quelles sont  les techniques que j’utilise ?</h2>
                <div className="therapies_flex">
                    <Subcathegory elements={elements}/>
                </div>
            </div>
        </div>
    )
}

export default Therapies;