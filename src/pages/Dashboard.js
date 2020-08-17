import React from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../components/dashboard/Home';
import Calendar from '../components/calendar/Calendar';
import Contact from '../components/dashboard/Contact';
import Event from '../components/dashboard/Event';

import PostContact from '../components/dashboard/PostContact';
import SearchPerson from '../components/dashboard/SearchPerson';
import SearchPersonTwo from '../components/dashboard/SearchPersonTwo';

import NavAddContact from '../components/dashboard/NavAddContact';
import PostPhone from '../components/dashboard/PostPhone';
import PostEmail from '../components/dashboard/PostEmail';
import PostAddress from "../components/dashboard/PostAddress";
import Navigation from '../components/dashboard/Navigation';

import './Dashboard.scss';

const Dashboard = () => {
    return (
        <>
            {/* <NavAddContact/> */}
            {/* <PersonList />  */}
          
            {/* ADMIN  ROUTING */}
            
            <div className="dashboard" id="dashboard">
                <Navigation /> 

                <Switch>
                {/* <Route path="/dashboard/home" component={Home}/>
                <Route path="/dashboard/contact" component={Contact}/>
                <Route path="/dashboard/event" component={Event}/>
                <Route path="/dashboard/calendar" component={Calendar}/>

                <Route path="/dashboard/postContact" component={PostContact}/>
                <Route path="/dashboard/searchPerson" component={SearchPerson}/>
                <Route path="/dashboard/searchPersonTwo" component={SearchPersonTwo}/>

                <Route path="/dashboard/navAddContact" component={NavAddContact}/>
                
                <Route path="/postPhone" component={PostPhone}/>
                <Route path="/postEmail" component={PostEmail}/>
                <Route path="/postAddress" component={PostAddress}/> */}

                    <Route path="/dashboard/home" component={Home}/>
                    <Route path="/dashboard/contact" component={Contact}/>
                    <Route path="/dashboard/navAddContact" component={NavAddContact}/>
                    <Route path="/dashboard/calendar" component={Calendar}/>
                    <Route path="/dashboard/event" component={Event}/>
                    <Route path="/dashboard/postContact" component={PostContact}/>
                    <Route path="/dashboard/postPhone" component={PostPhone}/>
                    <Route path="/dashboard/postEmail" component={PostEmail}/>
                    <Route path="/dashboard/postAddress" component={PostAddress}/>
                    <Route path="/dashboard/searchPerson" component={SearchPerson}/>
                </Switch>
                
            </div>
           
        </>
    )
}

export default Dashboard;