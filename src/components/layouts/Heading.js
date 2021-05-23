import React from 'react';
import './Heading.scss';

const Heading = ({img, alt, caption}) => {
    return(
        <div className="heading">
            <figure>
                <img src={img} alt={alt}/>
                <figcaption>{caption}</figcaption>
            </figure>
        </div>
    )
}

export default Heading;