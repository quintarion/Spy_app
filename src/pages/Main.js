import React from 'react';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import MoreTherapies from '../components/therapies/MoreTherapies';
import Therapies from '../components/therapies/Therapies';
import ToTop from '../components/layouts/ToTop';
import Training from '../components/about/Training';
import Step from '../components/step/Step';
import Who from '../components/categories/Who';
import Why from '../components/why/Why';

import './Main.scss';

const Main = () => {
    return (
        <div className="main">
            <div className="site-header">
                
            </div>
            <main className="site-content">
                <Home/>
                <div className="sticky-up">
                    <Header/>
                </div>
                <Training/>
                {/* effect sticky navigation */}
                <div className="sticky-down">
                    <ToTop/>
                </div>
                <Why/>
                <Who/>
                <Step/>
                <Therapies/>
                <MoreTherapies/>
                <Contact/>
            </main>
            <div className="site-footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Main;