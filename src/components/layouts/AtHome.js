import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './AtHome.scss';

const AtHome = () => {
    return (
        <div className="atHome">
            <Link to="/#home">
                <span><i class="fas fa-chevron-up"></i></span>
                <span>Accueil</span>
            </Link>
        </div>
    )
};

export default AtHome;