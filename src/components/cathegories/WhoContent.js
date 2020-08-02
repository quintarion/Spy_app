import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './WhoContent.scss';

const WhoContent = ({elements}) => {

  return (
    <div className="subcathegory">
      {elements.map((element, index) =>
      <figure key={index} className={element.class}>
        <img src={element.img} alt={element.alt}/>
          <figcaption>
            <Link to={element.path}><h3>{element.title}</h3></Link>
            {element.text}
          </figcaption>
        <Link activeClassName="" to={element.path}>{element.page}</Link>
      </figure>  
      )}
    </div>
  )
}
  
export default WhoContent;