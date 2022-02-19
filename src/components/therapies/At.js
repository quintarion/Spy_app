import React from 'react';
import Header from '../header/Header';
import Therapy from '../layouts/Therapy';
import maya from '../../assets/icons/maya_8.png';
import './At.scss';
import '../../style/main.scss';

export const elements = [
    {
        class: "",
        iframe: "https://www.youtube.com/embed/-wanF8-tUko",
        alt: "",
        title: "A.T",
        subtitle: "Analyse transactionnelle",
        img: maya,
        text: [<p>L'analyse transactionnelle, appelée aussi A.T., est une théorie de la personnalité, des rapports sociaux et de la communication. Créée en 1958 par le médecin psychiatre et psychanalyste <a href="https://www.cairn.info/revue-actualites-en-analyse-transactionnelle-2010-3-page-1.htm" target="_blank" rel="nofollow noreferrer noopener">Eric Berne</a>, elle postule, en chacun de l’existence d’ « <strong><i>états du Moi</i></strong> » (Parent, Adulte, Enfant), et étudie les phénomènes <strong>intrapsychiques</strong> à travers les échanges relationnels de deux personnes ou plus, appelés « <strong><i>transactions</i></strong> ». 
        </p>],
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "https://www.ifat-asso.org/",
        page: "En savoir plus",
    },
];

const At = () => {
    return (
        <>
            <div className="sticky-up">
                <Header/>
            </div>
            <section className="pageTherapy" id="at">
                <Therapy elements={elements} />
            </section>
        </>
    )
}

export default At;