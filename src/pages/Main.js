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
import Who from '../components/categories/Who';
import Why from '../components/why/Why';

import './Main.scss';

const Main = () => {
    return (
        <>
        <div className="site-header">
            <Header/>
        </div>
        <main className="site-content">
            <Home/>
            <Why/>
            <Who/>
            <Step/>
            <Training/>
            <Career/>
            <Therapies/>
            <MoreTherapies/>
            <Contact/>
        </main>
        <div className="site-footer">
            <Footer/>
        </div>
        </>
    )
}

export default Main;