import React from 'react';
import Career from '../components/about/Career';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import MoreTherapies from '../components/therapies/MoreTherapies';
import Therapies from '../components/therapies/Therapies';
import Training from '../components/about/Training';
import Step from '../components/step/Step';
import Who from '../components/cathegories/Who';

import './Main.scss';

const Main = () => {
    return (
        <>
        <div className="site-header">
            <Header/>
        </div>
        <div className="site-content">
            <Home/>
            <Who/>
            <Step/>
            <Therapies/>
            <MoreTherapies/>
            <Training/>
            <Career/>
            <Contact/>
        </div>
        <div className="site-footer">
            <Footer/>
        </div>
        </>
    )
}

export default Main;