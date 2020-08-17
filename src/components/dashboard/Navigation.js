import React from "react";
import { NavLink } from 'react-router-dom';
import TabNav from './TabNav';
import './Navigation.scss';

const tabDatas = [
    {
    icon: <i class="far fa-handshake"></i>,
    alt: "",
    path: "/dashboard/scheduler",
    item: "Agenda"
    },
    {
    icon: <i class="fas fa-child"></i>,
    alt: "",
    path: "/dashboard/contact",
    item: "Gestion des contacts"
    },
    {
    icon: <i class="far fa-calendar-alt"></i>,
    alt: "",
    path: "/dashboard/calendar",
    item: "Calendrier"
    },
    {
    icon: <i class="fas fa-rss"></i>, 
    alt: "",
    path: "/dashboard/event",
    item: "Evènements"
    },
    {
    icon: <i class="fas fa-times-circle"></i>,
    alt: "",
    path: "/",
    item: "Quitter mon tableau de bord"
    }
]

class Navigation extends React.Component {
    render() {
        return (
            <>
                <nav className="navigation main-menu">
                    <NavLink to="/dashboard/home"><h1>helen ' dashboard</h1></NavLink>
                    <TabNav tabDatas={tabDatas}/>
                </nav>
            </>
        ); 
    }    
}

export default Navigation;