import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './Subcathegory.scss';

const Subcathegory = ({elements}) => {

  return (
    <div className="subcathegory">
      {elements.map((element, index) =>
      <div key={index} className={element.class}>
        <figure>
          <img src={element.img} alt={element.alt}/>
            <figcaption>
              <Link to={element.path}><h3>{element.title}</h3></Link>
            </figcaption>
        </figure> 
        <div className="subcathegory-text">{element.text}</div>
        <Link activeClassName="" to={element.path}>{element.page}</Link>
      </div>
      )}
    </div>
  )
}
  
export default Subcathegory;