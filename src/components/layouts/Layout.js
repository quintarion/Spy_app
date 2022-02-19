import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Parallax } from 'react-scroll-parallax';
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
            <Parallax className="custom-class" y={[-20, 10]} tagOuter="figure">
              <img src={element.img} className="layout_container-icon" alt={element.alt} />
            </Parallax>
            {/* little screens picture */}
            {/* <img src={element.imgsmall} className="layout_container-icon-small" alt={element.altsmall} /> */}
        </div>
      </div>)}
    </div>
    )
}

export default Layout;