import React from 'react';
import Brand from '../layouts/Brand';
import Therapy from '../layouts/Therapy';
import maya_5 from '../../assets/icons/maya_5.png';
import '../../style/main.scss';

export const elements = [
    {
        class: "",
        img: maya_5,
        iframe: "https://www.youtube.com/embed/6_WcS_EKb2k",
        alt: "",
        title: "Réfléxologie Polarisée",
        subtitle: "",
        text: [<p>La réflexologie est une méthode qui stimule les processus d’auto-guérison du corps par le biais de pressions exercées sur les zones réflexes situées sur les pieds et les mains.
        Elle a pour effet de réduire le stress et les tensions. L’élimination des dépôts accumulés dans certaines zones réflexes active la circulation énergétique et aide le corps à trouver son équilibre.
        Une séance de réflexologie polarisée inclut les pieds (<i>pôle négatif</i>), les mains (<i>pôle neutre</i>) et la tête (<i>pôle positif</i>). Par ce massage complet on vise l’équilibre de l’énergie corporelle. Ainsi, elle peut circuler librement en redynamisant le corps.</p>],
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "https://www.reflexologues.fr/reflexologie-reflexologues-informations.html",
        page: "En savoir plus sur la Réflexologie Polarisée",
    },
];

const Reflexology = () => {
    return (
        <section className="pageTherapy" id="reflexology">
            <Brand/>
            <Therapy elements={elements} />
        </section>
    )
}

export default Reflexology;