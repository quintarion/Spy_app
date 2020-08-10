import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavEvent.scss';

const items = [
    {
        title: 'Ajouter un rendez-vous',
        path: '/',
        icon: 'fas fa-plus'
    },
    {
        title: 'Modifier un rendez-vous',
        path: '/',
        icon: 'far fa-edit'
    },
    {
        title: 'Supprimer un rendez-vous',
        path: '/',
        icon: 'fas fa-minus'
    }
];

const NavEvent = () => {
    return (
        <div className="navEvent">
            <h1>Allez dans <b>Evènements</b> pour...</h1> 
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

export default NavEvent;