import React from 'react';
import AtHome from '../layouts/AtHome';
import Heading from '../layouts/Heading';
import Prices from '../layouts/Prices';
import Category from '../layouts/Category';
import adults from '../../assets/pictures/adluts.jpg';
import touristWoman from '../../assets/icons/touristWoman.png';
import './Adult.scss';

const elements = [
    {
        title: "Adultes",
        img: adults,
        paragraph1: "Chocolate ice cream sugar plum jujubes gingerbread wafer marshmallow. Sugar plum tiramisu pie liquorice lemon drops cookie danish danish. Tiramisu gummies candy cheesecake topping muffin muffin sugar plum ice cream. Lollipop tootsie roll icing. Lollipop danish jujubes cake cake sweet. Sweet roll cupcake caramels toffee croissant. Marshmallow powder chocolate tootsie roll toffee powder gummi bears.",
        paragraph2: "Dessert jujubes dragée cake fruitcake chocolate bar fruitcake. Jelly icing marshmallow caramels lemon drops. Muffin danish candy oat cake marshmallow. Biscuit candy sesame snaps bear claw macaroon. Muffin cheesecake donut apple pie jujubes tart. Wafer toffee candy. Chupa chups cheesecake ice cream sugar plum. Brownie jelly sweet roll sugar plum croissant carrot cake sesame snaps pastry. Apple pie cookie gummi bears powder bear claw. Topping topping carrot cake wafer macaroon.",
        paragraph3: "Dessert jujubes dragée cake fruitcake chocolate bar fruitcake. Jelly icing marshmallow caramels lemon drops. Muffin danish candy oat cake marshmallow. Biscuit candy sesame snaps bear claw macaroon. Muffin cheesecake donut apple pie jujubes tart. Wafer toffee candy. Chupa chups cheesecake ice cream sugar plum. Brownie jelly sweet roll sugar plum croissant carrot cake sesame snaps pastry. Apple pie cookie gummi bears powder bear claw. Topping topping carrot cake wafer macaroon.",
        path: "/#contact",
        page: "Contact"
    }
];

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

const Adult = () => {
    return (
        <>
            <AtHome/>
            <Heading img={touristWoman} alt="" caption="adulte"/>
            <section className="adult pageCategory" id="adult">
            {/* <h2>Adulte</h2> */}
                <div className="pageCategory_box">
                    <Category elements={elements} />
                    <Prices cells={cells} />
                </div>
            </section>
        </>
    )
}

export default Adult;