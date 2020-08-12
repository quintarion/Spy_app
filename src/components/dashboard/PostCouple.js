import React from 'react';
import axios from 'axios';
import Button from '../layout/Button';

const config = require('../../config/config.js');

class PostCouple extends React.Component {

    state = {
        fk_idperson1: 18,
        fk_idperson2: 17,
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        console.log(this.state)

        event.preventDefault();
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/couple/add_couple'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/couple/add_couple'
        }
        axios.post(`${pathApi}`, 
         {
            fk_idperson1: this.state.fk_idperson1,
            fk_idperson2: this.state.fk_idperson2,
         }
        //this.state
        )
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Le couple a bien été ajouté à l'id ` + this.state.fk_idperson1 );
                    window.location.reload() //refreshed page
                }
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout du contact`);
            });
    }

    render() {
        return (
            <div className="postcontact">
            <form onSubmit={this.onSubmit} className="form">
                <h2>Ajouter des représentants légaux au contact mineur</h2>
                
                <span className="form_input">
                    <p>Premier représentant légal</p>
                    <label htmlFor="kinsman1">Prénom &amp; Nom</label>
                    <input 
                        id="kinsman1"
                        aria-required="true" // ?
                        className="contact-firstname"
                        name="child_kinsman1"
                        placeholder="Prénom et nom"
                        //requiered="requiered"
                        type="text"
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.child_kinsman1}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="phonekinsman1">Numéro de téléphone</label>
                    <input 
                        id="phonekinsman1"
                        aria-required="true" // ?
                        //className="contact-firstname"
                        name="child_phonekinsman1"
                        //placeholder=""
                        requiered="requiered"
                        type="tel"
                        //autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.child_phonekinsman1}
                        onChange={this.handleChange}
                    />
                </span>

                <span className="form_input">
                    <p>Second représentant légal</p>
                    <label htmlFor="kinsman2">Prénom &amp; Nom</label>
                    <input 
                        id="kinsman2"
                        aria-required="true" // ?
                        className="contact-firstname"
                        name="child_kinsman2"
                        placeholder="Prénom et nom"
                        //requiered="requiered"
                        type="text"
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.child_kinsman2}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="phonekinsman2">Numéro de téléphone</label>
                    <input 
                        id="phonekinsman2"
                        aria-required="true" // ?
                        //className="contact-firstname"
                        name="child_phonekinsman2"
                        //placeholder=""
                        //requiered="requiered"
                        type="tel"
                        //autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.child_phonekinsman2}
                        onChange={this.handleChange}
                    />
                </span>

                <Button
                    text="Valider" 
                    type="Submit" 
                    onClick={this.onSubmit}
                    name="Ajouter le(s) représentant(s)" //props
                />
            </form>
        </div>
        );
    }
}
        
export default PostCouple;