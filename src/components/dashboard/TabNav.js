import React from "react";
import { NavLink } from 'react-router-dom';
import './TabNav.scss';

class TabNav extends React.Component {
    state = {
        picked: false
    }

    //Passing Arguments to Event Handlers 
    //to change the style of the 'li' element when it is active
    changeStyle = (index) => {
        this.setState({picked: !this.state.picked[index]})
    }
   
    render () {
        let list_class = this.state.picked ? "picked" : null;

        return (
            <div className="tabNav">
                <ul>
                    {
                    this.props.tabDatas.map((tabData, index) =>
                    <li key={index} className={list_class} onClick={() => this.changeStyle(index)}>
                        {tabData.icon}
                        {/* <img src={tabData.icon} alt={tabData.alt}/> */}
                        <span class="nav-text"><NavLink activeClassName="is-active" to={tabData.path}>{tabData.item}</NavLink></span>
                    </li> 
                    )}
                </ul>
            </div>
        );
    }
}

export default TabNav;