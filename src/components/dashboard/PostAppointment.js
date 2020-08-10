import React from 'react';
import axios from 'axios';
import Button from '../layout/Button';
import PostNote from './PostNote';
import './PostAppointment.scss';

const config = require('../../config/config.js');

class PostAppointment extends React.Component {

    state = {
        start_date: '',
        start_time: '',
        end_date: '',
        end_time: '',
        note: '',
        fk_idperson: 18
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        console.log(this.state)

        event.preventDefault();
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/appointment/add_appointment' 
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/appointment/add_appointment' 
        }
        axios.post(`${pathApi}`, this.state)
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`le rendez-vous a bien été ajouté à votre liste de contacts id ` + this.state.fk_idperson);
                    window.location.reload() //refreshed page
                }
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout du rendez-vous`);
            });
    }

    render() {
        return (
            <div className="postappointement">
            <form onSubmit={this.onSubmit} className="form">
                <h2>Ajouter un rendez-vous</h2>

                <span className="form_input">
                    <label htmlFor="start">Début</label>
                    <input
                        id="start"
                        name="start_date"
                        requiered="requiered"
                        type="date"
                        value={this.state.start_date}
                        onChange={this.handleChange}
                    />

                    <input 
                        id="start"
                        name="start_time"
                        requiered="requiered"
                        type="time"
                        value={this.state.start_time}
                        onChange={this.handleChange}
                    />
                </span>
  
                <span className="form_input">
                    <label htmlFor="end">Fin</label>
                    <input
                        id="end"
                        name="end_date"
                        requiered="requiered"
                        type="date"
                        value={this.state.end_date}
                        onChange={this.handleChange}
                    />

                    <input 
                        id="end"
                        name="end_time"
                        requiered="requiered"
                        type="time"
                        value={this.state.end_time}
                        onChange={this.handleChange}
                    />
                </span>

                <PostNote />

                <Button
                    text="Valider" 
                    type="Submit" 
                    onClick={this.onSubmit}
                    name="Ajouter un rendez-vous" //props
                />
            </form>
        </div>
        );
    }
}
        
export default PostAppointment;