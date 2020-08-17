import React from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Button from '../layouts/Button';
import FrenchPhoneField from '../layouts/FrenchPhoneField';

import '../../style/components.scss';

//const config = require('../../config/config.js');

class PostPhone extends React.Component {

    state = {
        phone_number: '',
        phone_kind: '',
        phone_mobile: '',
        fk_idperson: 94,

        redirect: false,
    };

    kindChange = (event) => {
        this.setState({phone_kind: event.target.value})
    }

    mobileChange = (event) => {
        this.setState({phone_mobile: event.target.value})
    }

    setPhoneState = (value) => {
        this.setState({ phone_number: value });
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        console.log(this.state)

        event.preventDefault();
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/phone/add_phone'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/phone/add_phone'
        }
        axios.post(`${pathApi}`, 
        {
            phone_number: this.state.phone_number,
            phone_kind: this.state.phone_kind,
            phone_mobile: this.state.phone_mobile,
            fk_idperson: this.state.fk_idperson,
        }
        
        //this.state
        )
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Le numéro de téléphone a été ajouté au contact id ` + this.state.fk_idperson);
                    //Redirect
                    this.setState({redirect: true});
                    //refreshed page
                    window.location.reload() 
                }
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout du contact`);
            });
    }

    render() {
        //Redirect
        const {redirect} = this.state;

        return (
            <div className="formAdmin">
            {!redirect? 
            (<form onSubmit={this.onSubmit} className="form">
                <h2>Ajouter un numéro de téléphone au contact</h2>
                
                <span>
                    <p>Type</p>
                    <div>
                        <label htmlFor="perso">Numéro personnel</label>
                        <input 
                        type="radio" 
                        id="perso" 
                        name="phone_kind" 
                        value="PERSO"
                        onChange={this.kindChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="pro">Numéro professionnel</label>
                        <input 
                        type="radio" 
                        id="pro" 
                        name="phone_kind" 
                        value="PRO"
                        onChange={this.kindChange}
                        />
                    </div>
                </span>
                
                <span className="form_input">
                    <label htmlFor="phone">Numéro professionnel</label>
                    <FrenchPhoneField getPhone={this.setPhoneState} />
                    {/* <input 
                        id="phone"
                        aria-required="true" // ?
                        //className="contact-firstname"
                        name="phone_number"
                        //placeholder=""
                        requiered="requiered"
                        type="tel"
                        //autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.phone_number}
                        onChange={this.handleChange}
                    /> */}
                </span>

                <span>
                    <p>Type</p>
                    <div>
                        <label htmlFor="mobile">Téléphone portable</label>
                        <input 
                        type="radio" 
                        id="mobile" 
                        name="phone_mobile" 
                        value="1"
                        onChange={this.mobileChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="landline">Téléphone fixe</label>
                        <input 
                        type="radio" 
                        id="landline" 
                        name="phone_mobile" 
                        value="0"
                        onChange={this.mobileChange}
                        />
                    </div>
                </span>

                <nav className="formAdmin_nav">
                    <Link to="/dashboard/contact"><i class="fas fa-undo-alt"></i></Link>
                    <button
                        text="Valider" 
                        type="Submit" 
                        onClick={this.onSubmit}>
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
        
export default PostPhone;