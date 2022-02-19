import React from 'react';
import Header from '../header/Header';
import Prices from '../layouts/Prices';
//import '../../style/main.scss';

const title = {title: [<span>TARIFS CONSULTATIONS ENFANTS &amp; ADOLESCENTS</span>]};

const cells = [
    {
        name: "individuelle",
        duration: "60 min",
        price: "60 €"
    },
    {
        name: "en présence des parents",
        duration: "120 min",
        price: "150 €"
    }
];

const ChildPrice = () => {
    return (
        <>
            <Header />
            <section className="" id="childPrice">
                <Prices cells={cells} title={title} />
            </section>
        </>
    )
}

export default ChildPrice;