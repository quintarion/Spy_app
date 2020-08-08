import React from 'react';
import axios from 'axios';
import Button from '../layouts/Button';
import FrenchPhoneField from './FrenchPhoneField';
import './ContactForm.scss';

const config = require('../../config/config');

class ContactForm extends React.Component {

    /* DO NOT DELETE THIS CONSTRUCTOR PLEASE */
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
    }

    state = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    topicChange = (event) => {
        this.setState({ topic: event.target.value });
    }

    setPhoneState = (value) => {
        this.setState({ phone: value });
    }

    submitForm(event) {
        event.preventDefault();
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/sendmail'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/sendmail'
        }
        axios.post(`${pathApi}`, this.state)
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(this.state.firstname + ` votre message a été envoyé à Hélène ...`);
                    window.location.reload() /* refreshed page */
                }
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur d'envoi`);
            });
    }

    render() {
        return (
            <div className="contactForm">
            <p>Veuillez remplir le formulaire de contact ci-dessous et je vous répondrai dans les plus brefs délais.</p>
            <form onSubmit={this.submitForm} className="form">
                {/* <fieldset> */}
                    <span className="form_input">
                    <label htmlFor="firstname">Prénom *</label>
                    <input 
                        id="firstname"
                        aria-required="true"
                        className="contact-firstname"
                        name="firstname"
                        required='true'
                        type="text" 
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />
                    </span>
    
                    <span className="form_input">
                    <label htmlFor="lastname">Nom</label>
                    <input
                        id="lastname"
                        className="contact-lastname"
                        name="lastname"
                        type="text" 
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />
                    </span>
                        
                    <span className="form_input">
                    <label htmlFor="email">Adresse électronique *</label>
                    <input
                        id="email"
                        aria-required="true"
                        className="contact-email"
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" //REGEX
                        required='true'
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        type="email" 
                        value={this.state.email}
                        onChange={this.handleChange} 
                    />
                    </span>
                
                    <span className="form_input">
                    <label htmlFor="tel">Numéro de téléphone </label>
                    <span className="contact-phone"><FrenchPhoneField getPhone={this.setPhoneState} /></span>
                    </span>

                    <label htmlfor="topic">Quel est l'objet de votre message ?</label>
                    <div className="form-select">
                        <select type="select" id="topic" name="topic" className="contact-topic" value={this.state.value} onChange={this.topicChange} required>
                            <option  disabled value="" selected="selected">Veuillez sélectionnez un objet :</option> 
                            <option value={this.state.value}>Je souhaite prendre ou décaler un rendez-vous</option>
                            <option value={this.state.value}>Je souhaite me renseigner sur votre activité...</option>
                            <option value={this.state.value}>Je suis un partenaire ou un paire</option>
                            <option value={this.state.value}>Autre</option>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </select>
                    </div>

                    <span className="form_input">
                    <label htmlFor="message">Votre message *</label>
                    <textarea
                        aria-required="true"
                        name="message"
                        id="message"
                        rows={5}
                        cols={33}
                        maxlength={250}
                        value={this.state.message}
                        onChange={this.handleChange}
                    >
                    </textarea>
                    </span>
                {/* </fieldset> */}
                <Button
                        className="contact-button"
                        type="Submit"
                        value="Send" 
                        name="Soumettre" /* here pros value */
                    />
                <i>(*) champs obligatoires, 250 caractères max.<br/>Ce formulaire est protégé par Google Recaptcha</i>
            </form>
        </div>
        );
    }
}
        
export default ContactForm;