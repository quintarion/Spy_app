// IT IS OK //
import React from 'react';
import axios from 'axios';
import Button from '../layouts/Button';
import FrenchPhoneField from '../layouts/FrenchPhoneField';
import './ContactForm.scss';

//const config = require('../../config/config');

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

        open: false //select field
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    topicChange = (event) => {
        this.setState({ topic: event.target.value });
    }

    topicClicked = (event) => {
        event.preventDefault();
        console.log('La flèche a été cliquée.');
        this.setState({ open: !this.state.open }); //DO NOT CHANGE !...
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
        axios.post(`${pathApi}`, 
            {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                phone: this.state.phone,
                topic: this.state.topic,
                message: this.state.message, 
            }
        
        //this.state)
        )
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

        //let {open} = this.state; 

        return (
            <div className="contactForm">
            <p>Veuillez remplir le formulaire de contact ci-dessous et je vous répondrai dans les plus brefs délais.</p>
             
            <form onSubmit={this.submitForm} className="form">
                {/* <fieldset> */}
                    <div className="form-flex">
                        <div className="form-flex-one">
                            <label htmlFor="firstname">Prénom *</label>
                            <input 
                                id="firstname"
                                aria-required="true"
                                className="contact-firstname"
                                name="firstname"
                                //pattern="[A-zÀ-ú]" //Regex - majuscule-minuscule et les accents
                                required='true'
                                type="text" 
                                autoFocus
                                maxlength={42}
                                readonly={false}
                                value={this.state.firstname}
                                onChange={this.handleChange}
                            />
                            
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
                    
                            <label htmlFor="email">Adresse électronique *</label>
                            <input
                                id="email"
                                aria-required="true"
                                className="contact-email"
                                name="email"
                                //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" //REGEX
                                pattern="[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})"
                                required='true'
                                autoFocus
                                maxlength={42}
                                readonly={false}
                                type="email" 
                                value={this.state.email}
                                onChange={this.handleChange} 
                            />

                            <label htmlFor="tel">Numéro de téléphone </label>
                            <FrenchPhoneField getPhone={this.setPhoneState} />
                            <i>(*) champs obligatoires, 400 caractères max.<br/>Ce formulaire est protégé par Google Recaptcha</i>
                            </div>

                            <div className="form-flex-two">
                            <label htmlfor="topic">Quel est l'objet de votre message ?</label>
                            <div className="form-select">
                                <select type="select" id="topic" name="topic" value={this.state.value} className={!this.state.open? ("contact-topic-open") : ("contact-topic-close")} onClick={this.topicClicked} onChange={this.topicChange} required>
                                    <option  disabled value="" selected="selected" >Veuillez sélectionnez un objet </option> 
                                    <option value={this.state.value}>Prendre ou décaler un rendez-vous</option>
                                    <option value={this.state.value}>Me renseigner sur votre activité</option>
                                    <option value={this.state.value}>Partenaire / Paire</option>
                                    <option value={this.state.value}>Autre</option>
                                    {/*<i className={ open ? "fal fa-angle-down" : "fal fa-angle-up"} aria-hidden="true"></i>*/}
                                </select>
                            </div>
                            
                            <label htmlFor="message">Votre message *</label>
                            <textarea
                                aria-required="true"
                                name="message"
                                id="message"
                                rows={11}
                                //cols={50}
                                maxlength={400}
                                spellcheck="false" //INHIBER CORRECTEUR ORTHOGRAPHE :)
                                placeholder="Écrivez votre message à l'attention d'Hélène Quintana - ici - merci !"
                                value={this.state.message = this.state.message.charAt(0).toUpperCase() + this.state.message.substr(1)} //
                                onChange={this.handleChange}
                            >
                            </textarea>
                        </div>
                    </div>
                {/* </fieldset> */}
                <Button
                        className="contact-button"
                        type="Submit"
                        value="Send" 
                        name="Soumettre" /* here props value */
                />
            </form>
        </div>
        );
    }
}
        
export default ContactForm;