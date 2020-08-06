import React from 'react';
import Brand from '../layouts/Brand';
import Therapy from '../layouts/Therapy';
import maya_8 from '../../assets/icons/maya_8.png';
import '../../style/main.scss';

export const elements = [
    {
        class: "",
        img: maya_8,
        iframe: "https://www.youtube.com/embed/-wanF8-tUko",
        alt: "",
        title: "A.T",
        subtitle: "Analyse transactionnelle",
        text: [<p>L'analyse transactionnelle, appelée aussi AT, est une théorie de la personnalité, des rapports sociaux et de la communication. Créée en 1958 par le médecin psychiatre et psychanalyste <strong>Eric Berne</strong>, elle postule, en chacun de l’existence d’ « <i>états du Moi</i> » (Parent, Adulte, Enfant), et étudie les phénomènes intrapsychiques à travers les échanges relationnels de deux personnes ou plus, appelés « <i>transactions</i> ». 
        </p>],
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "https://www.ifat-asso.org/",
        page: "En savoir plus sur l'Analyse Transactionnelle",
    },
];

const At = () => {
    return (
        <>
        <section className="pageTherapy" id="at">
            <Brand/>
            <Therapy elements={elements} />
        </section>
        </>
    )
}

export default At;