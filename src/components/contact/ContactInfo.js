import React from "react";
import './ContactInfo.scss';

class Contact extends React.Component {
    state = {
        smaller: false
    }

    //Adding an event listener after mounting the components
    componentDidMount() { 
        window.addEventListener("resize", this.resize.bind(this)); 
        this.resize();
    } 
  
    resize() { 
        this.setState({smaller: window.innerWidth <= 800}); 
    } 
  
    render() {

        const smaller = this.state

        return (
            <div className="contactInfo" id="information">
                <div>
                    <h3>Hélène QUINTANA-FAUR&Eacute;</h3>
                    <h4>Psychologue Clinicienne</h4><br/>
                    {/* change content according to screen size */}
                    {!smaller ? (<p>cheminversite@gmail.com<a href="sms:0602010304">SMS</a></p>) : 
                        (<span><a href="mailto:chemeinversite@gmail.com">cheminversite@gmail.com</a></span>)}
                        <br/>
                        <p>19 Chemin du Mas de Bouran <br/>
                        34 290 SERVIAN<br/>
                        FRANCE</p>
                            {/* <Iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.4085005896627!2d3.304164250493083!3d43.431183674675175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1132c29f2d861%3A0x62e1c8ce30fd1082!2s19%20Chemin%20du%20Mas%20de%20Bouran%2C%2034290%20Servian!5e0!3m2!1sfr!2sfr!4v1596533575459!5m2!1sfr!2sfr" 
                            frameborder="0" 
                            allowfullscreen="" 
                            aria-hidden="false" 
                            tabindex="0" /> */}
                        <a href="tel:0602010304">06 02 01 03 04</a>
                </div>
            </div>
        )
    }
}

export default Contact;