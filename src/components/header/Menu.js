import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { items } from './items.js';
import './Menu.scss'

const Menu = () => (
    <div className="menu">
      {
        Object.keys(items).map(item_name => {
          return (
            <div className="menu-wrap"> 
              <ul>
                  <li className="menu-title">
                    <NavLink to={items[item_name].link} activeClassName="selected">{item_name}</NavLink>
                    <ul className="menu-sub">
                      {
                        items[item_name].sub_items.map((sub_item, index) => {
                        return(
                          <li key={index}><NavLink to={sub_item.link} activeClassName="selected">{sub_item.li}</NavLink></li>)
                        })
                      }
                    </ul> 
                  </li>
              </ul>
            </div>
          )
        })
      }
    </div>
);

export default Menu;