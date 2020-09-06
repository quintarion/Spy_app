import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './ToTop.scss';

const ToTop = () => {
    return (
        <div className="toTop">
            <Link to="#home">
                <span><i class="fas fa-chevron-up"></i></span>
                <span>Accueil</span>
            </Link>
        </div>
    )
};

export default ToTop;