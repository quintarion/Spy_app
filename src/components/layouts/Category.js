import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Parallax } from 'react-scroll-parallax';
import './Category.scss';

const Caterogy = ({elements}) => {

  return (
    <section className="layout-category">
      {elements.map((element, index) =>
      <div key={index}>
        <div className="layout-category-text">
          <p>
            {element.paragraph1}
          </p>
          <p>
            {element.paragraph2}
          </p>
          <p>
            {element.paragraph3}
          </p>
          <Parallax className="custom-class" x={[-5, 10]} y={[20,-10]} tagOuter="figure">
            <img src={element.img} className="layout-category-icon" alt={element.alt}/>
          </Parallax>
        </div>
        <span className="layout-category-btn">
          <Link activeClassName="" to={element.path}>{element.page}</Link>
        </span>  
      </div>
      )}
    </section>
    );
}

export default Caterogy;