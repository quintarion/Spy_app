import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import hands from '../../assets/icons/hands.png';
import './Brand.scss'

const Brand = () => {
    return (
        <>
            {/* logo brand */}
            <div className="header-brand">
                <Link to="/#home">
                    <img
                        className="logo"
                        src={hands}
                        alt="logo représentant deux mains"
                    />
                </Link>
            </div>
        </>
    )
}

export default Brand;