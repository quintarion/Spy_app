import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { items } from './items.js';
import './SiteMap.scss';

const regex = new RegExp('/#');

const SiteMap = () => {
    return (
        <>
            <nav className="sitemap">
                {/* filter the path handle navigation in the SPA or to the annex pages */}
                { Object.keys(items).map(item_name => {

                    if (items[item_name].subitems.filter(({path}) => path.match(regex))) {
                        return (
                            <div>
                                <ul>
                                    <h3>{item_name}</h3>
                                        {items[item_name].subitems.map(subitem => {
                                        return(<li><HashLink to={subitem.path}>{subitem.section}</HashLink></li>)
                                    })
                                    }
                                </ul>
                            </div>
                        )}
                    else {
                        return (
                            <div>
                                <ul>
                                    <h3>{item_name}</h3>
                                        {items[item_name].subitems.map(subitem => {
                                        return(<li><Link to={subitem.path}>{subitem.section}</Link></li>)
                                        })
                                        }
                                </ul>
                            </div>
                        )}
                })}
        </nav>
    </>
)};

export default SiteMap;