import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Menu from './Menu';
import hands from '../../assets/icons/hands.png';
import './Header.scss';

class Header extends React.Component {
  state = {
    opened: false,
  }
    
  toggle = () => {
    this.setState({ opened: !this.state.opened });
  }
  
  render() {
    return (
        <header className="header" role="banner">
          <div className="header-home">
            {/* logo brand */}
            <div className="header-brand">
              <Link to="#home">
                <img
                  className="logo"
                  src={hands}
                  alt="logo représentant deux mains"
                />
               </Link>
            </div>
            {/* navigation links  */}
            <div className= "toggle" onClick= {this.toggle}>
        
              {/* change the icon depending on whether the menu is open or closed */}
              <i
              className= {
                "fas " + (this.state.opened ? "fa fa-times" : "fa fa-bars")
              }
              />
  
            </div>
          </div>
          {/* navigation*/}
          <nav role="navigation" aria-label="Menu principal"
            className={
              "header-links " + (this.state.opened ? "opened" : "closed")
            }
          >
            <Menu />
          </nav>
        </header>
      )
    }
}

export default Header;