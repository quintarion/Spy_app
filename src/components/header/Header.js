import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Menu from './Menu';
import hands from '../../assets/icons/hands.png';
import './Header.scss';

const items = { 
  consultations: {
    link: "#consult",
    sub_items: [
      {
        li: "Pour qui ?",
        link: "#consult"
      },
      {
        li: "Déroulé d'une thérapie",
        link: "#step"
      }
    ]
  },
  thérapies: {
    link: "#therapy",
    sub_items: [
      {
        li: "E.M.D.R",
        link: "#emdr"
      },
      {
        li: "I.C.V",
        link: "#icv"
      },
      {
        li: "E.F.T",
        link: "#eft"
      },
      {
        li: "A.T",
        link: "#at"
      },
      {
        li: "Réfléxologie polarisée",
        link: "#reflexology"
      }
    ]
  },
  'A propos': {
    link: "#about",
    sub_items: [
      {
        li: "Ma formation",
        link: "#training"
      },
      {
        li: "Mon parcours",
        link: "#career"
      }
    ]
  },
  Contact: {
    link: "#contact",
    sub_items: [
      {
        li: "envoyer un message",
        link: "#contact"
      }, 
      {
        li: "Informations pratiques",
        link: "#information"
      }
    ]
  },
  // actu: {
  //   link: "/event",
  //   sub_items: [
  //     {
  //       li: "évènements",
  //       link: "/event"
  //     },
  //     {
  //       li: "Autres ressources",
  //       link: "/other"
  //     }
  //   ]
  // }
}

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
              <Link to="#gretting">
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
              "header-links" + " " + (this.state.opened ? "opened" : "closed")
            }
          >
            <Menu items={items}/>
          </nav>
        </header>
      )
    }
}

export default Header;