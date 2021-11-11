import React from 'react';
import ContactInfo from './ContactInfo';
import './Info.scss';

const Info = () => {
    return (
        <section className="page-info" id="information">
            <h2>Informations pratiques</h2>
            <div className="page-info_content">
                <ContactInfo />
            </div>
        </section>
    )
}

export default Info;