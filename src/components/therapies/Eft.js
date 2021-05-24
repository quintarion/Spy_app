import React from 'react';
// import Brand from '../layouts/Brand';
// import Heading from '../layouts/Heading';
import Header from '../header/Header';
import Therapy from '../layouts/Therapy';
//import maya_2 from '../../assets/icons/maya_2.png';
import './Eft.scss';
import '../../style/main.scss';

export const elements = [
    {
        class: "",
        iframe: "https://www.youtube.com/embed/baOkLy4wmgE",
        alt: "",
        title: "E.F.T",
        subtitle: "Emotional Freedom Technique",
        text: [<p>Il s'agit de tapoter certains points spécifiques situés sur nos méridiens.
        En tapotant ainsi tout en pensant à ce qui nous dérange, on équilibre les méridiens perturbés.
        Vous conservez la mémoire de l'évènement qui vous a dérangé, mais n'en ressentez plus la charge émotive qui l'accompagnait.
        C'est dire comme cette méthode peut trouver de nombreuses utilisations.
        Les enfants l'adorent car elle les aide à gérer de nombreux petits maux au quotidien :
        peurs ou phobies (du noir, des araignées, de l'école...), colères, moqueries, anxiété de séparation, pipi au lit...</p>],
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "https://technique-eft.com/decouvrir-eft.html",
        page: "En savoir plus",
    },
];

const Eft = () => {
    return (
        <>
            <Header />
            <section className="pageTherapy" id="eft">
                {/* <Brand/> */}
                {/* <Heading img={maya_2} alt="" caption="E.F.T"/> */}
                <Therapy elements={elements} />
            </section>
        </>
    )
}

export default Eft;