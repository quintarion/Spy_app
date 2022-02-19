import React from 'react';
import Header from '../header/Header';
import Prices from '../layouts/Prices';
import '../../style/main.scss';

const title = {title: [<span>TARIFS CONSULTATIONS COUPLES</span>]};

const cells = [
    {
        name: "première séance",
        duration: "1h30",
        price: "60 €"
    },
    {
        name: "en couple",
        duration: "2h",
        price: "120 €"
    },
    {
        name: "individuelle",
        duration: "1h",
        price: "60 €"
    }
];

const CouplePrice = () => {
    return (
        <>
            <div className="sticky-up">
                <Header/>
            </div>
            <section className="" id="couplePrice">
                <Prices cells={cells} title={title} />
            </section>
        </>
    )
}

export default CouplePrice;