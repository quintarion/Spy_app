import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './Cathegory.scss';

const Catherogy = (props) => {

  return (
    <div className="layout-cathegory">
      {props.elements.map((element, index) =>
      <div key={index}>
        <p>
          {element.paragraph1}
        </p>
        <img src={element.img} className="layout-cathegory-icon" alt={element.alt}/>
        <p>
          {element.paragraph2}
        </p>
        <p>
          {element.paragraph3}
        </p>
        <span className="layout-cathegory-btn">
          <Link activeClassName="" to={element.path}>{element.page}</Link>
        </span>  
      </div>
      )}
    </div>
    );
}

export default Catherogy;