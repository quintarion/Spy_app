import React from "react";
import Header from '../header/Header';
import LayoutNews from '../news/LayoutNews';
import './News.scss';
import pregnant from '../../assets/icons/pregnant.png';
//import { Form } from "reactstrap";

const elements = [
    {
        icon: '',
        title: 'Parentalité',
        datetime: '2021-12-21',
        date: '21/12/2021',
        more: '"Les 1000 premiers jours, qu’est-ce-que c’est ?"',
        path: 'https://solidarites-sante.gouv.fr/affaires-sociales/familles-enfance/pacte-pour-l-enfance/1000jours/les-1000-premiers-jours-qu-est-ce-que-c-est/'
    },
    {
        icon: '',
        title: 'Troubles anxieux',
        date: '2021-07-12',
        datetime: '07/12/2021',
        date: '21/12/2021',
        more: '',
        path: 'https://www.ameli.fr/assure/sante/themes/troubles-anxieux-anxiete/traitement'
    },
    {
        icon: '',
        title: 'P.N.L.',
        datetime: '2019-11-07',
        date: '07/11/2019',
        more: '"programmation neuro-linguistique"',
        path: 'https://www.psychologies.com/Therapies/Toutes-les-therapies/Therapies-breves/Articles-et-Dossiers/La-PNL-ou-programmation-neuro-linguistique'
    },
    {
        icon: '',
        title: 'Santé mentale',
        datetime: '',
        date: '17/01/2022',
        more: '"La Fondation Aésio lance son premier appel à projets pour le bien-être mental"',
        path: 'https://www.psychologies.com/Actualites/Sante-mentale/La-Fondation-Aesio-lance-son-premier-appel-a-projets-pour-le-bien-etre-mental',
    }
]
;

const News = () => {
    return (
        <section className="news" id="news">
            <div className="sticky-up">
                <Header/>
            </div>
            <LayoutNews elements={elements}/>
        </section>
    )
}

export default News;