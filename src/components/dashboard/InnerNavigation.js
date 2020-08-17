import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './NavContact.scss';

const NavContact = ({title, items}) => {
    return (
        <div>
            <h1>{title}</h1> 
                <ul>
                    {
                        items.map((item, index) => 
                            <li key={index}>
                                <Link to={item.path}>
                                    <i class={item.icon}></i>
                                </Link>
                            </li>
                        )
                    }
                </ul>
        </div>
    )
}

export default NavContact;