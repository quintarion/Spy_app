import React from "react";
import Menu from './Menu';
import './Header.scss';

class Header extends React.Component {
  state = {
    opened: false,
    // scroll animation :
    show: true, 
    scrollPos: 0
  }
    
  toggle = () => {
    this.setState({ opened: !this.state.opened });
  }

  // set the event listener after the component mounts
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // a function attached to the scroll event the function that will fire
  // handleScroll = () => {
  //   const { scrollPos } = this.state
  //   this.setState({
  //     scrollPos: document.body.getBoundingClientRect().top, //send the size of an element in viewport 
  //     show: document.body.getBoundingClientRect().top < scrollPos
  //   });
  // }

  render() {
    return (
      <div className={this.state.show ? "active" : "hidden"}> {/* show true if we’re scrolling up and false if we’re scrolling up */}
        <header className="header" role="banner"> 
          <div className="header-home">
            {/* logo brand */}
            {/* <div className="header-brand">
              <Link to="#home">
                <img
                  className="logo"
                  src=""
                  alt="logo représentant deux mains"
                />
               </Link>
            </div> */}
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
      </div>
      )
    }
}

export default Header;