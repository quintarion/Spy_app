import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavContact.scss';

const items = [
    {
        title: 'Ajouter un contact',
        path: '/dashboard/postContact',
        icon: 'fas fa-user-plus'
    },
    {
        title: 'Modifier le contact',
        path: '/dashboard/searchPerson',
        icon: 'fas fa-user-edit'
    },
    {
        title: 'Supprimer le contact',
        path: '/dashboard/searchPerson',
        icon: 'fas fa-user-minus'
    }
];

const NavContact = () => {
    return (
        <div className="navContact">
            <h1>Allez dans <b>Contact</b> pour...</h1> 
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
    )
}

export default NavContact;