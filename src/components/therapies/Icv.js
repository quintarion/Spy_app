import React from 'react';
import Therapy from '../layouts/Therapy';
import raincoat from '../../assets/icons/raincoat.png';
import '../../style/main.scss';

export const elements = [
    {
        class: "",
        img: raincoat,
        iframe: "https://www.youtube.com/embed/NC5l1YImueg",
        alt: "",
        title: "I.C.V",
        subtitle: "L’Intégration des Cycles de la Vie",
        text: [<p> L’ICV permet la « <i>digestion</i> » des émotions du passé en connectant des réseaux de neurones les uns aux autres afin de dater les événements passés et faire en sorte que le corps n’y réagisse plus malgré nous; sentir dans son corps que le passé est terminé est ce qui assure le changement.
        L’outil principal du psychothérapeute est une liste de souvenirs succincte <i>(ligne du temps)</i> que le patient établit seul ou avec l’aide du psychothérapeute.
        Elle va permettre au patient de realiser que les souvenirs du passé sont réellement passés et que les stratégies développées dans le passé pour y faire face n’ont plus de raison d’être. Le cerveau comprend que l’événement est bien terminé. Nous sommes constitués de la somme de nos expériences, lorsque les émotions liées aux souvenirs s’estompent, le comportement change.
        La répétition de la ligne de temps, permet la connexion entre les différents neurones sollicités grâce à l’imagerie mentale, et démontre au cerveau que les événements douloureux sont terminés.
        Grace à la plasticité du cerveau, cette thérapie permet d’obtenir de nouvelles fondations, un soi central solide en permettant la connexion entre le corps et l’esprit. <a className="linkNoStyle" href='https://www.cairn.info/publications-de-Peggy-Pace--698781.htm#:' target="_blank" rel="nofollow noreferrer noopener">Bibliographie de Peggy Pace.</a></p>],
        innerpath: "/#contact",
        innerpage: "Contact",
        path: "http://aficv.com/",
        page: "En savoir plus sur l'ICV",
    },
];

const Icv = () => {
    return (
        <section className="pageTherapy">
            <Therapy elements={elements} />
        </section>
    )
}

export default Icv;