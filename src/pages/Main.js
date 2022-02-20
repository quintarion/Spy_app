import React from 'react';
import AtHome from '../components/layouts/AtHome';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Info from '../components/contact/Info';
import MoreTherapies from '../components/therapies/MoreTherapies';
import Therapies from '../components/therapies/Therapies';
import Training from '../components/about/Training';
import Step from '../components/step/Step';
import Who from '../components/categories/Who';
import Why from '../components/why/Why';

import './Main.scss';

const pages = [
    {
        path: '/#about'
    },
    {
        path: '/#step'
    },
    {
        path: '/#who'
    },
    {
        path: '/#why'
    }
]

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
                    {/* <ScrollSpy pages={pages}/> */}
                    <AtHome/>
                </div>
                <Why/>
                <Who/>
                <Step/>
                <Therapies/>
                <MoreTherapies/>
                <Info />
            </main>
            <div className="site-footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Main;