import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ContactInfo from '../contact/ContactInfo';
import SiteMap from './SiteMap';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <ContactInfo />
                <SiteMap />
            </div>
            <div className="footer_bottom">
                <p><i>&nbsp;
                <Link to='#mentions'>&nbsp;Privacy &#x26; Terms</Link>
                </i>
                &nbsp;
                <span className="claw">&nbsp;Made with <span className="icon"><i class="fas fa-heart"></i></span> for my mother...</span>&nbsp;©2020 Tous droits réservés.</p>
            </div>
        </div>
    )
}

export default Footer;