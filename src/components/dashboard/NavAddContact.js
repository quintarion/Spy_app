import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavAddContact.scss';

const tests = [
    {
        title: 'Ajouter un numéro de téléphone',
        path: '/dashboard/postPhone',
        icon: 'fas fa-phone'
    },
    {
        title: 'Ajouter un courriel',
        path: '/dashboard/postEmail',
        icon: 'fas fa-at'
    },
    {
        title: 'Ajouter une adresse postale',
        path: '/dashboard/postAddress',
        icon: 'far fa-envelope'
    }
];

const NavAddContact = () => {
    return (
        <div className="navAddContact">
            <div className="navAddContact_content">
                <h1>Ajouter au <b>Contact</b>...</h1> 
                <ul>
                    {
                        tests.map((test, index) => 
                            <li key={index}>
                                <NavLink to={test.path}>
                                    <i class={test.icon}></i>
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavAddContact;