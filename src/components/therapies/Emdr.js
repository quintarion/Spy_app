import React from 'react';
//import Brand from '../layouts/Brand';
//import Heading from '../layouts/Heading';
import Header from '../header/Header';
import Therapy from '../layouts/Therapy';
//import trust from '../../assets/icons/trust.png';
import './Emdr.scss';
import '../../style/main.scss';

export const elements = [
    {
        class: "emdr-content",
        iframe: "https://www.youtube.com/embed/thYoQKmD6_s",
        alt: "",
        title: "E.M.D.R",
        subtitle: "L'intégration neuro-émotionnelle par les mouvements oculaires",
        text: [<p>L'<strong>EMDR</strong> <em>(Eye Mouvement Desensitization et Reprocessing)</em> est une méthode, qui permet une résolution rapide des symptômes liés à des blocages consécutifs à des événements vécus de façon douloureuse et non intégrés par la psychée, grâce à des stimulations sensorielles effectuées des deux côté du corps en alternance et à un protocole spécifique pour chaque moment ciblé. Lorsque le psychisme est dépassé par un choc traumatique, notre cerveau n’arrive pas à traiter – ou <i>digérer</i> – les informations choquantes comme il le fait ordinairement et reste bloqué sur l’évènement, sans que nous en ayons conscience. 
        Les événements à l’origine de <strong>troubles post-traumatiques</strong> peuvent être aussi des évènements de vie difficiles, qui n’ont pas été identifiés à l’époque comme potentiellement traumatiques car ils semblent avoir été surmontés, mais qui ont pu laisser des blessures émotionnelles pouvant être à l’origine de perturbations psychologiques ou de comportements inadaptés ou excessifs dans la vie quotidienne. Cela peut concerner des difficultés familiales vécues dans l’enfance, des ruptures, des difficultés conjugales, des maladies et opérations, des interruptions de grossesse, des difficultés professionnelles, etc.</p>],
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "https://www.emdr-france.org/web/quest-therapie-emdr/",
        page: "En savoir plus",
    }
];

const Emdr = () => {
    return (
        <>
            <Header />
            <section className="pageTherapy" id="emdr">
                {/* <Brand/> */}
                {/* <Heading img={trust} alt="" caption="E.M.D.R"/> */}
                <Therapy elements={elements} />
            </section>
        </>
    )
}

export default Emdr;