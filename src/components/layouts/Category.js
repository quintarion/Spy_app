import React from "react";
import { Parallax } from 'react-scroll-parallax';
import {NavLink} from 'react-router-dom';
import './Category.scss';

const Caterogy = ({elements}) => {

  return (
    <section className="layout-category">
    {elements.map((element, index) =>
      <div key={index}>
        <div className="layout-category_container">
          <div className="layout-category_container-text">
            <h2>{element.title}</h2>
            <div className="layout-category_container-text--style">
                <img src={element.float} alt="" className="float"/>
                <p className="float">
                  {element.paragraph1}
                </p>
                <p>
                  {element.paragraph2}
                </p>
                <p>
                  {element.paragraph3}
                </p>
            </div>
            <div className="layout-category_container-link">
              <NavLink to={element.path}>{element.page}</NavLink>
              <NavLink to={element.innerpath}>{element.innerpage}</NavLink>
            </div>
          </div>
          {/* <div>
            <Parallax className="custom-class" x={[-50, 40]} y={[50,-10]} tagOuter="figure">
              <img src={element.img} className="layout-category_container-icon" alt={element.alt}/>
            </Parallax>
          </div> */}
        </div>
        
        {/* <span className="layout-category-btn">
          <Link activeClassName="" to={element.path}>{element.page}</Link>
        </span>   */}
      </div>
      )}
    </section>
    );
}

export default Caterogy;