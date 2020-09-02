import React from 'react';
import Subcategory from '../layouts/Subcategory';
import maya_7 from '../../assets/icons/maya_7.png';
import maya_5 from '../../assets/icons/maya_5.png';
import maya_8 from '../../assets/icons/maya_8.png';
import './MoreTherapies.scss';

const elements = [
    {
        class: "two",
        img: maya_8,
        alt: "",
        title: "A.T",
        text: [<p>L'analyse transactionnelle, appelée aussi AT, est une théorie de la personnalité, des rapports sociaux et de la communication . . .</p>],
        path: "/at",
        page: "[...]",
    },
    {
        class: "three",
        img: maya_5,
        alt: "",
        title: "Réfléxologie Polarisée",
        text: [<p>La réflexologie est une méthode qui stimule les processus d’auto-guérison du corps par le biais de pressions exercées sur les zones réflexes situées sur les pieds et les mains . . .</p>],
        path: "/reflexology",
        page: "[...]",
    },
    {
        class: "one",
        img: maya_7,
        alt: "",
        title: "Relaxation Sophronique",
        text: [<p>Avec le «  terpnos logos  », la relaxation sophronique , s’adresse au système parasympathique et permet une détente  d’où vont émerger des pensées  et visualisations positives.</p>],
        path: "/sophrology",
        page: "[...]",
    },
];

const MoreTherapy = () => {
    return (
        <div className="moreTherapies" id="moreTherapies">
        <div className="moreTherapies__container">
            <h2>Thérapies complémentaires</h2>
            <div className="moreTherapies__flex">
                <Subcategory elements={elements}/>
            </div>
        </div>
      </div>
    )
}

export default MoreTherapy;