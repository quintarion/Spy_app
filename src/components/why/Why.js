import React from 'react';
//import { Link } from 'react-router-dom';
import './Why.scss';

const Why = () => {
    return (
      <div className="why" id="why">
        <div className="why_container">
            <div className="why_intro">
              <h2>Pourquoi consulter ?</h2>
              <ul>
                <li>si vous ressentez un mal être dans certaines circonstances , sans pouvoir en comprendre la raison.</li>
                <li>si vous vivez un débordement émotionnel.</li>
                <li>si vous êtes en panne d’énergie , comme vidé , sans envie.</li>
                <li>si vous avez repéré que certains situations ou relations entraînent un malaise récurrent dont vous connaissez,<br/> même parfois l’origine, mais dont vous ne réussissez pas à vous débarrasser.</li>
                <li>si vous êtes la cible de violence physique ou verbale ou victime de harcèlement.</li>
                <li>si vous venez de vivre un stress post-traumatique (mort d’un proche, accident de la circulation, accident domestique...)</li>
                <li>si vous ressentez de l’angoisse , de l’agitation ou du stress sans raison apparente.</li>
              </ul>
            </div>
        </div>
      </div>
    );
}

export default Why;