import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Parallax } from 'react-scroll-parallax';
import './Category.scss';

const Caterogy = (props) => {

  return (
    <div className="layout-category">
      {props.elements.map((element, index) =>
      <div key={index}>
        <p>
          {element.paragraph1}
        </p>
        <Parallax className="custom-class" x={[-5, 5]} y={[20,-20]} tagOuter="figure">
          <img src={element.img} className="layout-category-icon" alt={element.alt}/>
        </Parallax>
        <p>
          {element.paragraph2}
        </p>
        <p>
          {element.paragraph3}
        </p>
        <span className="layout-category-btn">
          <Link activeClassName="" to={element.path}>{element.page}</Link>
        </span>  
      </div>
      )}
    </div>
    );
}

export default Caterogy;