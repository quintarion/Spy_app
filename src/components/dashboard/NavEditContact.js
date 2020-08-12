import React from 'react';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './NavAddContact.scss';

const items = [
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

const NavEditContact = () => {
    return (
        <div className="navAddContact">
            <div className="navAddContact_content">
                <h1>Modifier au <b>Contact</b>...</h1> 
                <ul>
                    {
                        items.map((item, index) => 
                            <li key={index}>
                                <Link to={item.path}>
                                    <i class={item.icon}></i>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavEditContact;