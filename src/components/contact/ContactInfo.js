import React from "react";
import './ContactInfo.scss';

class Contact extends React.Component {
    state = {
        smaller: false
    }

    //Adding an event listener after mounting the components//
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
            <div className="contactInfo">
                <div>
                <h3>Hélène Quintana-Fauré</h3>
                    <h4>Psychologue Clinicienne-Psychothérapeute Diplômée d'état</h4>
                    <p>SIRET: 38288842800036<br/>
                    ADELI: 349309914</p>
                    <br/>
                    <h4><u>Adresse du cabinet</u></h4>
                    <address>19 Chemin du Mas de Bouran<br/>
                    34 290 Servian<br/>
                    FRANCE M&Eacute;TROPOLITAINE
                    </address>
                    <br/>
                    <p>A.P.M.R &emsp;<i class="fas fa-wheelchair"></i></p>
                    <p>Praticienne francophone</p>
                    <br/>
                    <a href="https://goo.gl/maps/jTw3MxJvPuxNK2Gd7" target="_blank">Comment m'y rendre ?</a>
                    <br/>
                    <h4><u>Prendre un rendez-vous</u></h4>
                    <p>La prise de rendez-vous se fait par téléphone au : 
                    {/* change content according to screen size */}
                    {!smaller ? (<a href="sms:0625230905">SMS</a>) : 
                    (<a href="tel:0625230905">06.25.23.09.05</a>)}</p>
                </div>
            </div>
        )
    }
}

export default Contact;