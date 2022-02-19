import React from 'react';
import Header from '../header/Header';
import Prices from '../layouts/Prices';
import '../../style/main.scss';

const title = {title: [<span>TARIFS CONSULTATIONS ADULTES</span>]};

const cells = [  
    {
        name: "Première séance",
        duration: "1h",
        price: "60 €"
    },     
    {
        name: "Séance individuelle",
        duration: "1h",
        price: "60 €"
    },
    {
        name: "Séance individuelle",
        duration: "1h30",
        price: "90 €"
    },
];


const AdultPrice = () => {
    return (
        <>
            <Header />
            <section className="" id="adultPrice">
                <Prices cells={cells} title={title} />
            </section>
        </>
    )
}

export default AdultPrice;