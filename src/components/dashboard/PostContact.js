import React from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import './PostContact.scss';

// IMPORT CONFIG 
//const config = require('../../config/config');

class PostContact extends React.Component {

    state = {
        firstname: '',
        lastname: '',
        genre: '',
        birth: '',
        client: '',
        occupation: '',

        redirect: false,
    };

    clientChange = (event) => {
        this.setState({client: event.target.value});
    }

    genreChange = (event) => {
        this.setState({genre: event.target.value});
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
        console.log(this.state)

        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/contact/add_contact'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/contact/add_contact'
        }

        axios.post(`${pathApi}`, 
            {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            genre: this.state.genre,
            birth: this.state.birth,
            client: this.state.client,
            occupation: this.state.occupation
            })
        .then((res) =>  { 
            if (res.error) {
                alert(res.error);
            } else {
                alert( `le contact ` + this.state.firstname + ` a bien été ajouté(e) à votre liste de contacts`);
                //REDIRECT
                this.setState({redirect: true});
                //REFRESHED PAGE
                window.location.reload() 
            }
        }
        )
        
        .catch(error => {
            console.error(error);
            alert(`Erreur lors de l'ajout du contact`);
        });
    }

    render() {

        // REDIRECT
        const { redirect } = this.state;

        return (
            <div className="formAdmin layout-form">
            
            {!redirect?

            (<form onSubmit={this.onSubmit} className="formA">
                <h2 class="heading">Créer un nouveau contact - Etat Civil</h2>
               
                <fieldset>
                    <legend>Status</legend>
                        <input 
                        className=""
                        type="radio" 
                        id="client" 
                        name="client" 
                        value="1"
                        onChange={this.clientChange}
                        /> 
                        <label className="" htmlFor="client" className="form-radio-label">&nbsp;&nbsp;client</label>

                        <input 
                        type="radio" 
                        id="peer" 
                        name="client" 
                        value="0"
                        onChange={this.clientChange}
                        />
                        <label className="" htmlFor="peer">&nbsp;&nbsp;Partenaire</label>
                </fieldset>

                <fieldset>
                    <legend>Genre</legend>
                   
                        <input 
                        type="radio" 
                        id="femal" 
                        name="genre" 
                        value="FEMAL"
                        onChange={this.genreChange}
                        />
                        <label className="" htmlFor="femal">&nbsp;&nbsp;Féminin</label>
                   
                        <input 
                        type="radio" 
                        id="mal" 
                        name="genre" 
                        value="MAL"
                        onChange={this.genreChange}
                        />
                        <label className="active" htmlFor="mal">&nbsp;&nbsp;Masculin</label>
                 
                        <input 
                        type="radio" 
                        id="other" 
                        name="genre"
                        value="OTHER"
                        onChange={this.genreChange}
                        />
                        <label className="active" htmlFor="other">&nbsp;&nbsp;Autre</label>
                </fieldset>
               
                <div className="controls">
                    <label className="active" htmlFor="firstname">Prénom</label>
                    <input 
                        id="firstname"
                        aria-required="true" // ?
                        className="floatLabel"
                        name="firstname"
                        placeholder="Prénom"
                        //requiered="requiered"
                        type="text"
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />
                </div>
  
                <div className="controls">
                    <label className="active" htmlFor="lastname">Nom</label>
                    <input
                        id="lastname"
                        className="floatLabel"
                        name="lastname"
                        placeholder="Nom"
                        type="text"
                        //requiered="requiered"
                        autoFocus
                        maxlength={42}
                        readonly={false}
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="controls">
                    <label className="active" htlm="birth"><i class="fa fa-calendar"></i>&nbsp;&nbsp;Date de naissance</label>
                    <input 
                        type="date" 
                        name="birth" 
                        id="birth"
                        className="floatLabel"
                        value={this.state.birth}
                        onChange={this.handleChange}
                        />
                </div>

                <div className="controls">
                    <label className="active" htmlFor="occupation">Activité</label>
                    <input
                        id="occupation"
                        className="floatLabel"
                        name="occupation"
                        placeholder="Quelle est son activité ?"
                        type="text"
                        // requiered="requiered"
                        // autoFocus ??
                        maxlength={42}
                        // readonly={false} ??
                        value={this.state.occupation}
                        onChange={this.handleChange}
                    />
                </div>
                <nav className="formAdmin_nav">
                    <Link to="/dashboard/contact"><i class="fas fa-undo-alt"></i></Link>
                    <button
                        text="Valider" 
                        type="Submit" 
                        onClick={this.onSubmit}
                        className="contact-button">
                        <i class="fas fa-check"></i>
                    </button>
                </nav>
            </form>)
           : 
           (<Redirect to='/dashboard/navAddContact'/>)}
           
        </div>
        
        );
    }
}
  
export default PostContact;