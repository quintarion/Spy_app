import React from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Button from '../layouts/Button';

import '../../style/components.scss';

// IMPORT CONFIG 
//const config = require('../../config/config');

class PostEmail extends React.Component {

    state = {
        email: '',
        email_kind: '',
        fk_idperson: 2,

        redirect: false
    };

    kindChange = (event) => {
        this.setState({email_kind: event.target.value})
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        console.log(this.state)

        event.preventDefault();
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/email/add_email'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/email/add_email'
        }
        axios.post(`${pathApi}`, 
            {
                email: this.state.email,
                email_kind: this.state.email_kind,
                fk_idperson: this.state.fk_idperson,
            }
        //this.state
        )
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Le courriel a été ajouté au contact id ` + this.state.fk_idperson);
                    //redirect
                    this.setState({redirect: true});
                    //refreshed page
                    window.location.reload(); 
                }
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'adresse électronique`);
            });
    }

    render() {
        //redirect
        const {redirect} = this.state
        return (
            <div className="formAdmin">
            {!redirect?
            (<form onSubmit={this.onSubmit} className="form">
                <h2>Ajouter un courriel au contact</h2>
                
                <span>
                    <p>Type</p>
                    <div>
                        <label htmlFor="perso">Email personnel</label>
                        <input 
                        type="radio" 
                        id="perso" 
                        name="email_kind" 
                        value="PERSO"
                        onChange={this.kindChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="pro">Email professionnel</label>
                        <input 
                        type="radio" 
                        id="pro" 
                        name="email_kind" 
                        value="PRO"
                        onChange={this.kindChange}
                        />
                    </div>
                </span>
                
                <span className="form_input">
                    <label htmlFor="email">Courriel</label>
                    <input 
                        id="email"
                        aria-required="true" // ?
                        //className="contact-firstname"
                        name="email"
                        //placeholder=""
                        requiered="requiered"
                        type="email"
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </span>
                <nav className="formAdmin_nav">
                    <Link to="/dashboard/contact"><i class="fas fa-undo-alt"></i></Link>
                    <button
                        text="Valider" 
                        type="Submit" 
                        onClick={this.onSubmit}
                        name="Créer un email">
                        <i class="fas fa-check"></i>
                    </button>
                </nav>
            </form>)
            :
            (<Redirect to="/dashboard/navAddContact"/>)
            }
        </div>
        );
    }
}
        
export default PostEmail;