import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
//import { Parallax } from 'react-scroll-parallax';
import './Subcategory.scss';

const Subcategory = ({elements}) => {

  return (
    <div className="subcategory">
      {elements.map((element, index) =>
      <div key={index} className={element.class}>
        <figure>
          {/* <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure"> */}
            <Link to={element.path}><img src={element.img} alt={element.alt}/></Link>
          {/* </Parallax> */}
            <figcaption>
              <Link to={element.path}><h3>{element.title}</h3></Link>
            </figcaption>
        </figure> 
        <div className="subcategory-text">
          {element.text}
          <Link activeClassName="" to={element.path}>{element.page}</Link>
        </div>
      </div>
      )}
    </div>
  )
}
  
export default Subcategory;