// works without redux by adding the id by hand //

import React from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
//import Button from '../layouts/Button';

import '../../style/main.scss';

//const config = require('../../config/config.js');

class PostAddress extends React.Component {

    state = {
        add_kind: '',
        add_supplement: '',
        add_housenumber: '',
        add_track: '',
        add_street: '',
        add_postcode: '',
        add_town: '',
        add_country: '',
        fk_idperson: 129,

        redirect: false
    };

    kindChange = (event) => {
        this.setState({add_kind: event.target.value});
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        console.log(this.state)

        event.preventDefault();
        console.log(this.state)

        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/address/add_address/'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/address/add_address'
        }

        axios.post(`${pathApi}`, 
            {
            add_kind: this.state.add_kind,
            add_locality: this.state.add_locality, 
            add_housenumber: this.state.add_housenumber,
            add_track: this.state.add_track,
            add_street: this.state.add_street,
            add_postcode: this.state.add_postcode,
            add_town: this.state.add_town,
            add_country: this.state.add_country,
            fk_idperson: this.state.fk_idperson
            })
        .then((res) =>  { 
            if (res.error) {
                alert(res.error);
            } else {
                alert( `l'adresse du contact id ` + this.state.fk_idperson + ` a bien été ajoutée`);
                //Redirect
                this.setState({redirect: true});
                //refreshed page
                window.location.reload();
            }
        })
        
        .catch(error => {
            console.error(error);
            alert(`Erreur lors de l'ajout du contact`);
        });
    }

    render() {
        //redirect
        const {redirect} = this.state
        return (
            <div className="layout_form postemail">
            {!redirect?
            (<form onSubmit={this.onSubmit} className="form">
                <h2>Ajouter une adresse postale</h2>
                
                <span>
                    <p>Type d'adresse</p>
                    <div>
                        <label htmlFor="perso">Personnelle</label>
                        <input 
                        type="radio" 
                        id="perso" 
                        name="add_kind" 
                        value="PERSO"
                        onChange={this.kindChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="pro">Professionnelle</label>
                        <input 
                        type="radio" 
                        id="pro" 
                        name="add_kind" 
                        value="PRO"
                        onChange={this.kindChange}
                        />
                    </div>
                </span>
                <br/>
                <span className="form_input">
                    <label htmlFor="locality">Supplément/Lieu-dit</label>
                    <input 
                        id="locality"
                        aria-required="true" // ?
                        //className="contact-firstname"
                        name="add_locality"
                        placeholder=""
                        //requiered="requiered"
                        type="text"
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.add_locality}
                        onChange={this.handleChange}
                    />
                </span>
                <br/>
                <span className="form_input">
                    <label htmlFor="housenumber">Numéro de voie</label>
                    <input
                        id="housenumber"
                        //className="contact-lastname"
                        name="add_housenumber"
                        type="number"
                        //requiered="requiered"
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.add_housenumber}
                        onChange={this.handleChange}
                    />
                </span>
                <br/>
                <span>
                    <label htlm="track">Type de voie</label>
                    <input 
                        type="text" 
                        name="add_track" 
                        id="track"
                        value={this.state.add_track}
                        onChange={this.handleChange}
                        />
                </span>
                <br/>
                <span className="form_input">
                    <label htmlFor="street">Nom de la voie</label>
                    <input
                        id="street"
                        //className="contact-lastname"
                        name="add_street"
                        type="text"
                        // requiered="requiered"
                        // autoFocus ??
                        maxlength={42}
                        // readonly={false} ??
                        value={this.state.add_occupation}
                        onChange={this.handleChange}
                    />
                </span>
                <br/>
                <span className="form_input">
                    <label htmlFor="postcode">Code postal</label>
                    <input
                        id="postcode"
                        //className="contact-lastname"
                        name="add_postcode"
                        type="number"
                        pattern="([A-Z]+[A-Z]?\-)?[0-9]{1,2} ?[0-9]{3}" //Regex Code postal au format 31 100 ou 31100
                        // requiered="requiered"
                        // autoFocus ??
                        maxlength={42}
                        // readonly={false} ??
                        value={this.state.add_postcode}
                        onChange={this.handleChange}
                    />
                </span>
                <br/>
                <span className="form_input">
                    <label htmlFor="town">Ville</label>
                    <input
                        id="town"
                        //className="contact-lastname"
                        name="add_town"
                        type="text"
                        // requiered="requiered"
                        // autoFocus ??
                        maxlength={42}
                        // readonly={false} ??
                        value={this.state.add_town}
                        onChange={this.handleChange}
                    />
                </span>
                <br/>
                <span className="form_input">
                    <label htmlFor="country">Pays</label>
                    <input
                        id="country"
                        //className="contact-lastname"
                        name="add_country"
                        type="text"
                        // requiered="requiered"
                        // autoFocus ??
                        maxlength={42}
                        // readonly={false} ??
                        value={this.state.add_country}
                        onChange={this.handleChange}
                    />
                </span>
                <nav className="formAdmin_nav">
                    <Link to="/dashboard/contact">
                        <i class="fas fa-undo-alt"></i>
                    </Link>
                    
                    <button
                        text="Valider" 
                        type="Submit" 
                        onClick={this.onSubmit}
                        className="contact-button"
                        name="Ajouter cette addresse">
                        <i class="fas fa-check"></i>
                    </button>
                </nav>    
            </form>)
            :
            (<Redirect to='/dashboard/navAddContact'/>)
            }
        </div>
        );
    }
}
        
export default PostAddress;