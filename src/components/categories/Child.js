import React from 'react';
import Brand from '../layouts/Brand';
import Prices from '../layouts/Prices';
import Category from '../layouts/Category';
import children from '../../assets/pictures/children.jpg';
import './Child.scss';

const elements = [
    {
        title: "Enfants & Adolescents",
        img: children,
        //paragraph1: [<li>Abdul Moiz</li>,<li>John Doe</li>], //How to add html tags
        paragraph1: [<span>Lors de la première séance qui dure toujours une heure trente (coût  60 €) je reçois toutes les personnes vivant au foyer de l’enfant pendant trois premiers quart d’heure puis pendant les trois quart d’heure qui suivent, l’enfant seul ou accompagné d’un des deux parents si l’enfant est trop petit ou s'il ne souhaite pas rester seul .</span>],
        paragraph2: [<span>Si la thérapie se poursuit , les séances qui suivent seront de une heure (60 €)  et se composeront comme ainsi  soit : <ul><li>dix minutes pour faire le point avec le ou les parents,</li><li>puis l’enfant seul ou avec un parent pour les raisons évoquées plus haut,</li><li>dix minutes pour clôturer la séance avec le ou les parents qui auront attendu dans la salle d’attente</li></ul></span>],
        paragraph3: [<span><u>Cas particuliers</u> : Dans les situations de séparation, il sera utile et souhaitable , d’associer l’autre parent. Si l’ enfant est gardé régulièrement par les grands-parents et si cela me semble nécessaire je demander ai à recevoir les grands-parents avec l’ enfant</span>],
        path: "/#contact",
        page: "Contact"
    }
];

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

const Child = () => {
    return (
        <>
            <Brand/>
            <section className="child pageCategory" id="child">
                <h2>Enfants &amp; Adolescents</h2>
                <div className="pageCategory_box">
                    <Category elements={elements} />
                    <Prices cells={cells} />
                </div>
            </section>
        </>
    )
}

export default Child;