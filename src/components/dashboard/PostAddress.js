import React from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import Button from '../layouts/Button';

const config = require('../../config/config.js');

class PostAddress extends React.Component {

    state = {
        add_kind: '',
        add_supplement: '',
        add_number: '',
        add_track: '',
        add_street: '',
        add_postalcode: '',
        add_town: '',
        add_country: '',
        fk_idperson: this.props.test,

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
            add_supplement: this.state.add_supplement,
            add_number: this.state.add_number,
            add_track: this.state.add_track,
            add_street: this.state.add_street,
            add_postalcode: this.state.add_postalcode,
            add_town: this.state.add_town,
            add_country: this.state.add_country,
            //fk_idperson: this.state.fk_idperson
            fk_idperson: this.props.test
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
            <div className="postcontact">
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

                <span className="form_input">
                    <label htmlFor="supplement">Supplément</label>
                    <input 
                        id="supplement"
                        aria-required="true" // ?
                        //className="contact-firstname"
                        name="add_supplement"
                        placeholder="Supplement d'adresse"
                        //requiered="requiered"
                        type="text"
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.add_supplement}
                        onChange={this.handleChange}
                    />
                </span>
  
                <span className="form_input">
                    <label htmlFor="number">Numéro de voie</label>
                    <input
                        id="text"
                        //className="contact-lastname"
                        name="add_number"
                        type="text"
                        //requiered="requiered"
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.add_number}
                        onChange={this.handleChange}
                    />
                </span>

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

                <span className="form_input">
                    <label htmlFor="postalcode">Code postal</label>
                    <input
                        id="postalcode"
                        //className="contact-lastname"
                        name="add_postalcode"
                        type="text"
                        // requiered="requiered"
                        // autoFocus ??
                        maxlength={42}
                        // readonly={false} ??
                        value={this.state.add_postalcode}
                        onChange={this.handleChange}
                    />
                </span>

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
                <div>
                <Link to="/dashboard/contact">
                    <Button name="Retour accueil"/>
                </Link>
                
                <Button
                    text="Valider" 
                    type="Submit" 
                    onClick={this.onSubmit}
                    className="contact-button"
                    name="Ajouter cette addresse" //props
                />
                </div>    
            </form>)
            :
            (<Redirect to="dashboard/navAddContact"/>)
            }
        </div>
        );
    }
}
        
export default PostAddress;