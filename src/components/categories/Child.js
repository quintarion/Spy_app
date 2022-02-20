import React from 'react';
import Header from '../header/Header';
import Category from '../layouts/Category';
import child from '../../assets/icons/noun_fox.png';
import './Child.scss';

const elements = [
    {
        title: "Enfants & Adolescents",
        img: "",
        float: child,
        paragraph1: [<div>Lors de la première séance qui dure toujours une heure trente (coût  60 €), je reçois toutes les personnes vivant au foyer de l’enfant pendant trois premiers quart d’heure puis pendant les trois quart d’heure qui suivent, l’enfant seul ou accompagné d’un des deux parents si l’enfant est trop petit ou s'il ne souhaite pas rester seul .<br/></div>],
        paragraph2: [<div>Si la thérapie se poursuit, les séances qui suivent seront de une heure (60 €) et se composeront comme ainsi soit: <ul><li>dix minutes pour faire le point avec le ou les parents,</li><li>puis l’enfant seul ou avec un parent pour les raisons évoquées plus haut,</li><li>dix minutes pour clôturer la séance avec le ou les parents qui auront attendu dans la salle d’attente</li></ul><br/></div>],
        paragraph3: [<span><u>Cas particuliers</u>: Dans les situations de séparation, il sera utile et souhaitable, d’associer l’autre parent. Si l’ enfant est gardé régulièrement par les grands-parents et si cela me semble nécessaire je demander à recevoir les grands-parents avec l’ enfant</span>],
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "/childPrice",
        page: "Tarifs"
    }
];

const Child = () => {
    return (
        <>
            <div className="sticky-up">
                <Header/>
            </div>
            <section className="pageTherapy Child" id="child">
                <Category elements={elements} />
            </section>
        </>
    )
}

export default Child;