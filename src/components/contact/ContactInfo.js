import React from "react";
import Iframe from 'react-iframe';
import './ContactInfo.scss';

const Contact = () => {
    return (
        <div className="contactInfo" id="information">
            <div className="contactInfo_card">
                <div>
                    <h3>Hélène Quintana-Fauré <br/><span>Psychologue Clinicienne</span></h3><br/>
                    <h4>Ecrire</h4><br/>
                    <p>adresse@emeple.fr</p><br/>
                    <p><a href="sms:0602010304">Message SMS</a></p><br/>
                    <a href="mailto:adresse@exemple.fr">écrire ici</a><br/>
                    <h4>Adresse</h4><br/>
                    <p>19 Chemin du Mas de Bouran <br/>
                    34 290 SERVIAN<br/>
                    FRANCE</p><br/>
                    <h4>Téléphone</h4><br/>
                    <p><a href="tel:0602010304">06 02 01 03 04</a></p>
                </div>
            </div>

            <Iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.4085005896627!2d3.304164250493083!3d43.431183674675175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1132c29f2d861%3A0x62e1c8ce30fd1082!2s19%20Chemin%20du%20Mas%20de%20Bouran%2C%2034290%20Servian!5e0!3m2!1sfr!2sfr!4v1596533575459!5m2!1sfr!2sfr" 
            width="600" 
            height="450" 
            frameborder="0" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0" />
            
        </div>
    )
}

export default Contact;