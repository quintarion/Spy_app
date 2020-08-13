import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from '../components/calendar/Calendar';
import Contact from '../components/dashboard/Contact';
import Event from '../components/dashboard/Event';
import Home from '../components/dashboard/Home';
import NavAddContact from '../components/dashboard/NavAddContact';
import Navigation from '../components/dashboard/Navigation';
import PostContact from '../components/dashboard/PostContact';
import EditContact from '../components/dashboard/EditContact';
import DeleteContact from '../components/dashboard/DeleteContact';
import PostAddress from '../components/dashboard/PostAddress';
import PostEmail from '../components/dashboard/PostEmail';
import PostPhone from '../components/dashboard/PostPhone';
import NavContact from '../components/dashboard/NavContact';
import SearchPerson from '../components/dashboard/SearchPerson';
import SearchPersonTwo from '../components/dashboard/SearchPersonTwo';

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
                    <Route path="/dashboard/home" component={Home}/>
                    <Route path="/dashboard/contact" component={Contact}/>
                    <Route path="/dashboard/navAddContact" component={NavAddContact}/>
                    <Route path="/dashboard/calendar" component={Calendar}/>
                    <Route path="/dashboard/event" component={Event}/>
                    <Route path="/dashboard/postContact" component={PostContact}/>
                    <Route path="/dashboard/editContact" component={EditContact}/>
                    <Route path="/dashboard/deleteCoNtact" component={DeleteContact}/>
                    <Route path="/dashboard/postPhone" component={PostPhone}/>
                    <Route path="/dashboard/postEmail" component={PostEmail}/>
                    <Route path="/dashboard/postAddress" component={PostAddress}/>
                    <Route path="/dashboard/navContact" component={NavContact}/>
                    <Route path="/dashboard/navAddContact" component={NavAddContact}/>
                    <Route path="/dashboard/searchPerson" component={SearchPerson}/>
                    <Route path="/dashboard/searchPersonTwo" component={SearchPersonTwo}/>
                </Switch>
            </div>
           
        </>
    )
}

export default Dashboard;