import React from 'react';
import Header from '../header/Header';
import Category from '../layouts/Category';
import adult from '../../assets/icons/noun_maya.png';
//import adults from '../../assets/pictures/adluts.jpg';
//import adult from '../../assets/icons/noun_maya_adult.svg';
//import '../layouts/Category.scss'; 
import './Adult.scss';
import '../../style/main.scss';

const elements = [
     {
        title: "Adultes",
        img: "",
        float: adult,
        paragraph1: "Chocolate ice cream sugar plum jujubes gingerbread wafer marshmallow. Sugar plum tiramisu pie liquorice lemon drops cookie danish danish. Tiramisu gummies candy cheesecake topping muffin muffin sugar plum ice cream. Lollipop tootsie roll icing. Lollipop danish jujubes cake cake sweet. Sweet roll cupcake caramels toffee croissant. Marshmallow powder chocolate tootsie roll toffee powder gummi bears.",
        paragraph2: "Dessert jujubes dragée cake fruitcake chocolate bar fruitcake. Jelly icing marshmallow caramels lemon drops. Muffin danish candy oat cake marshmallow. Biscuit candy sesame snaps bear claw macaroon. Muffin cheesecake donut apple pie jujubes tart. Wafer toffee candy. Chupa chups cheesecake ice cream sugar plum. Brownie jelly sweet roll sugar plum croissant carrot cake sesame snaps pastry. Apple pie cookie gummi bears powder bear claw. Topping topping carrot cake wafer macaroon.",
        paragraph3: "Dessert jujubes dragée cake fruitcake chocolate bar fruitcake. Jelly icing marshmallow caramels lemon drops. Muffin danish candy oat cake marshmallow. Biscuit candy sesame snaps bear claw macaroon. Muffin cheesecake donut apple pie jujubes tart. Wafer toffee candy. Chupa chups cheesecake ice cream sugar plum. Brownie jelly sweet roll sugar plum croissant carrot cake sesame snaps pastry. Apple pie cookie gummi bears powder bear claw. Topping topping carrot cake wafer macaroon.",
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "/adultPrice",
        page: "Tarifs"
    }
];

const Adult = () => {
    return (
        <>
            <div className="sticky-up">
                <Header/>
            </div>
            <section className="pageTherapy" id="adult">
                <Category elements={elements} />
            </section>
        </>
    )
}

export default Adult;