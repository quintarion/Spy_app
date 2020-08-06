import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './Layout.scss';

/* Map alls the props 'elements' in the Layout component */

const Layout = ({elements}) => {
  return  (
    <div className="layout">
     { elements.map((element, index) =>
      <div key={index} className="layout_container" id={element.id}>
        <div className="layout_container-text">
          <h2>{element.title}</h2>
          {element.text}
          <span>
            <NavLink activeClassName="selected" to={element.path}>{element.page}</NavLink>
          </span>
        </div>
        <div className="layout_container-img">
            <img src={element.img} className="layout-icon" alt={element.alt} />
        </div>
     </div> )}
    </div>
  )
}

export default Layout;