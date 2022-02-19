import React from "react";
import './LayoutNews.scss';

const LayoutNews = ({elements}) => {

  return (
    <section className="layout-news">
    <h1>Fil d'actualité</h1>
      {elements.map((element, index) =>
        <div key={index} className="layout-news_container">
            <div className="layout-news_container-card">
                <i class={element.icon}>&nbsp;</i> 
                <h2>{element.title} &nbsp;</h2>
                <p>{element.more} &emsp;</p>
                <p><time datetime={element.datetime}>{element.date}</time>&nbsp;</p>
                <div className="layout-news_container-link">
                  <a href={element.path} target="_blank" rel="noopener noreferrer">&emsp;<i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
      )}
    </section>
    );
}

export default LayoutNews;