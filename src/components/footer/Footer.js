import React from 'react';
import Modal from '../layouts/Modal';
import SiteMap from './SiteMap';
import './Footer.scss';

const props = {
    name: 'Mentions Légales',
    title: [<h2>Conditions générales d'utilisation<br/>Politique de protection et de gestion des données personnelles</h2>],
    content: [<article>
        <h3>&Eacute;diteur</h3>
        <p>Hélène Quintana-Fauré<br/>
        19 chemin du mas de Bouran<br/>
        34 290 SERVIAN<br/>
        Téléphone: +33 (0)6 25 23 09 05<br/>
        Courriel: quinhel@orange.fr</p>
        <p>Siret: 38288842800036</p>
        <p>ADELI: 349309914</p>
        <br/>
        <h3>Activité</h3>
        <p>Pour une activité réglementée, le site internet doit mentionner les informations suivantes :<br/>
        Référence aux règles professionnelles applicables<br/>
        Indication du titre professionnel<br/>
        Nom de l’État de l'Union européenne dans lequel le titre professionnel a été octroyé<br/>
        Nom de l'ordre ou de l'organisme auprès duquel une inscription a été faite</p>
        <br/>
        <p>Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) ; est réputée identifiable une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un numéro d'identification ou à un ou plusieurs éléments spécifiques, propres à son identité physique, physiologique, psychique, économique, culturelle ou sociale.</p>
        <p>Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site : <span>https://www.cnil.fr/</span></p>
        <br/>
        <h3>Identification des données collectées, finalité et exploitation des données traitées</h3>
        <p>Afin d’assurer le suivi de ses rendez-vous, Madame Quintana-Fauré; peut collecter des données nécessaires à son activité.
        Ces données peuvent être collectées lorsque le client ou le partenaire :</p>
        <ul>
            <li>effectue une demande de renseignement sur le site web ou par un autre moyen ;</li>
            <li>contacte par courriel ou par téléphone</li>
        </ul>
        <p>Les données personnelles ainsi collectées sont soumises à la présente politique de confidentialité.<br/>
        Afin de mieux appréhender les traitements de données effectués par Madame Quintana-Fauré, nous vous invitons à prendre connaissances des informations ci-dessous :</p>
        <table>
            <caption>Traitement des données reccueillies</caption>
            <tr>
                <th>finalité de traitement</th>
                <th>type de données</th>
            </tr>
            <tr>
                <td>
                    <ul>
                        <li>Gestion des rendez-vous,</li>
                        <li>Rappels SMS via une une interface de programmation d'application (API)</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Genre</li>
                        <li>Identité:</li>
                        <li>Nom</li>
                        <li>Prénom(s)</li>
                        <li>Adresse</li>
                        <li>Contacts:</li>
                        <li>Numéros de téléphone</li>
                        <li>Adresse de courrier électronique</li>
                        <li>Date de naissance</li>
                        <li>Catégorie socioprofessionnelle</li>
                        <li>Lien de parenté</li>
                    </ul>
                </td>
                </tr>
        </table>
        <p><i>Vos informations personnelles peuvent être collectées exclusivement pour le suivi des rendez-vous et ne seront jamais diffusées sans votre consentement.</i></p>
        <br/>
        <h3>Hébergement des Données</h3>
        <p>L’ensemble des données collectées et traitées est hébergée ...<br/>
        Toutefois, dans le cas où l’un des sous-traitants se situe hors Union Européenne, met en place toutes les mesures nécessaires afin d’assurer la sécurité des données de ses clients et partenaires.</p>
        <br/>
        <h3>Durée de conservation des données</h3>
        <p>Les données sont conservées et utilisées pour une durée conforme à la législation en vigueur.</p>
    </article>]
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content">
                <SiteMap />
            </div>
            <hr/>
            <div className="footer_bottom">
                {/* <Modal {...props}/> */}
                <p>©2022 Tous droits réservés.</p>
                <Modal {...props}/>
                <p>Made with <span className="icon"><i class="fas fa-heart"></i></span> for my mother...</p>
            </div>
        </div>
    )
}

export default Footer;