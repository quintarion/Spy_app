import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavContact from './NavContact';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="admin-contact">
            <NavContact />
        </div>
    )
}

export default Contact;