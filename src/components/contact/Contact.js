import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import './Contact.scss';

const Contact = () => {
    return (
        <section className="page-contact" id="contact">
            <h2>Entrons en contact !</h2>
            <div className="page-contact_content">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact;