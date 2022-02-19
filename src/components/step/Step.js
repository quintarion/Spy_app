import React from 'react';
import deal from '../../assets/icons/deal.png';
import cloud from '../../assets/icons/rain-cloud.png';
import river from '../../assets/icons/river.png';
import './Step.scss';

const Step = () => {
    return (
        <section className="step" id="step">
            <div className="step_container">
                <h2>Déroulé d'une thérapie</h2>
                <div className="step_container-text">
                    <div className="one">
                        <div className="one-img"><img src={deal} alt=""/></div>
                        <p className="float">Lors de la première séance nous définirons ensemble, vos attentes, votre objectif ainsi que les modalités pratiques.<br/>
                        Bien que les types d’approches  que j’utilise soient classés parmi les thérapies brèves
                        il est important de  distinguer deux types de psycho traumatismes : celui avec un grand T, dans une situation où s’est produit un événement isolé, unique, choquant et provoquant un stress post-traumatique alors que vous avez bénéficié un attachement sain avec  des parents bienveillants soutenants, présents  sans être intrusifs.
                        Dans ces conditions, alors en quelques séances vous serez sûrement soulagé peut-être même vous sentir  renforcé de cette expérience.
                        </p>
                    </div>
                    <div className="two">
                        <div className="two-img"><img src={cloud} alt=""/></div>
                        <p>Cependant, la plupart du temps ce qui nous amène en thérapie est une gêne, profonde, récurrente et qui peut nous bloquer physiquement dans certaines situations
                        Nous découvrons alors bien souvent des registres de pensées négatives qui ont pris racine dans notre enfance et l’on va ensemble « débusquer » ces racines pour leur permettre de s’intégrer  dans notre psychée, libérant ainsi un espace psychique fluide,  propice à l’activation du parasympathique engendrant une sensation de bien être et la capacité de partager la joie dans le Présent.</p>
                    </div>

                    <div className="three">
                        <div className="three-img"><img src={river} alt="" className="three-img"/></div>
                        <p>Le « <i>chemin</i> » de la psychothérapie commence par une prise de contact « <i>en bas dans la vallée</i> » avec une planification des objectifs, un contrat pour l’organisation des séances, rythme, durée….
                        « <i>La montée</i> » est parfois pénible douloureuse, émotionnellement éprouvante, nous pouvons ressentir, parfois,  des moments de découragements ; mais  il y a aussi «  les haltes » qui permettent de faire le bilan  apaisantes et satisfaisantes , elles permettent d’ admirer le chemin parcouru , sentir  l’air plus frais, percevoir les idées plus clairement . 
                        Au sommet, c’est la joie partagée !<br/> 
                        Il est alors possible de redescendre enrichi de cette épreuve et plus solide, plus déterminé.<br/>
                        En effet, les phases d’intégration font suite à une activation, souvent chargée d’émotions retenues dans le passé c’est quand, nous ne craignons pas la reviviscence dans le processus d’intégration que nous  peuvons nous se libérer de cette sorte de « <i>cristallisation psychique</i> » qui provoque un blocage (peur, phobie, obsession, etc…).<br/>
                        Mon rôle est de vous accompagner en douceur et à votre rythme,  en co-construisant votre parcours thérapeutique.</p>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Step;