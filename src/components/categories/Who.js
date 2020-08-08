import React, { Component } from "react";
import Subcategory from "../layouts/Subcategory";
import kiss from '../../assets/icons/kiss.png';
import touristWoman from '../../assets/icons/touristWoman.png';
import treeSwing from '../../assets/icons/treeSwing.png';
import './Who.scss';
import '../../style/main.scss';

const elements = [
  {
    class: "one",
    img: treeSwing,
    alt: "",
    title: "Enfant, Adolescent",
    text: [<p>Votre enfant est hyper actif, trop rêveur, a des terreurs nocturnes ou cauchemars récurrents,  ne peut pas dormir seul, souffre de perturbation du transit intestinal, est énurétique ou violent... N’oubliez pas que je demanderai à rencontrer toutes les personnes vivant au foyer de l’enfant lors de la première séance et la plus part du temps chercherai à contacter l’autre parent en cas de séparation.</p>],
    path: "/child/#child",
    page: "En savoir plus...",
    indent1: "testestest",
    indent2: "fffffff",
    indent3: "tttt"
  },
  {
    class: "two",
    img: touristWoman,
    alt: "",
    title: "Adulte",
    text: [<p>Powder halvah tart powder sugar plum liquorice marzipan. Oat cake chupa chups liquorice carrot cake macaroon. Liquorice gummies oat cake cookie pastry cake gingerbread dessert dessert. Powder chocolate brownie icing sweet brownie.</p>],
    path: "/adult/#adult",
    page: "Adulte",
    indent1: "testestest",
    indent2: "fffffff",
    indent3: "tttt"
  },
  {
    class: "three",
    img: kiss,
    alt: "",
    title: "En Couple",
    text: [<p>
    Vous ne vous sentez plus en lien.<br/>
    Vous venez de vivre un évènement traumatique (décès d’un proche, annonce d’une maladie grave,accident de la circulation, domestique...) vous concernant tous les deux.<br/>
    Vous vous ennuyez ensemble.<br/>
    Vous ressentez de l’agressivité au contact l’un de l’autre. Infidelité.<br/>
    Vous voulez évoluer ensemble, les conditions des séances sont énoncées dans le lien ci-dessous.<br/>
    </p>],
    path: "/couple/#couple",
    page: "En savoir plus...",
    indent1: "testestest",
    indent2: "fffffff",
    indent3: "tttt"
  },
];


class Who extends Component {
  state = {};

  // const str= "I am gonna teach you he typing text effect";
  // const split = str.split("");
  // const counter = 0;

  // const SI=setInterval(function(){
  // const h1 = $("h1");
  
  // h1.append(split[counter]);
  // counter++;
  // if(counter==str.length){clearInterval(SI)}
 
  // },200)

  render() {
    return (
      <div className="who" id="who">
        <div className="who_container">
            <div className="who_intro">
              <h2>Quel public puis-je accueillir ?</h2>
              <p> Mes consultations s’adressent aux adultes (<i>mon local est accessible <mark>personne en situation de handicap</mark> et <mark>personne à mobilité réduite</mark></i>), mais aussi aux enfants quelque soit leur âge (<i>toujours accompagnés de leurs parents ou de toutes les personnes partageant leur domicile au moins lors de la première séance</i>), aux adolescents,  aux couples.</p>
            </div>
            <div className="who_flex">
                <Subcategory elements={elements} />
            </div>
        </div>
      </div>
    );
  }
}

export default Who;