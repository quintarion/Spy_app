import React from 'react';
import axios from 'axios';

import './GetContact.scss';

class GetContact extends React.Component {
    
    state = {
        contacts: []
    };

    componentDidMount() {
        this.getContacts();
    }

    getContacts = () => {

        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/contact/show_contact'
        if (process.env.NODE_ENV === 'production') {
        pathApi = process.env.REACT_APP_PATH_API_PROD + '/contact/show_contact'
        }

        axios
            //.get('http://localhost:3028/contact/show_contact')
            .get(`${pathApi}`)
            .then(response => this.setState({ contacts: response.data }))
            .catch(error => {
                console.log(error);
                throw(error);
                //return null;
            });
        };
        
        render() {
            return (
                <div>
                    {this.state.contacts.length === 0 ? (
                        <div>Loading...</div>
                    ) : (
                        this.state.contacts.map((contact, index) => {
                            return <div key={index} className="getcontact"><span>{contact.firstname}</span> <span>{contact.lastname}</span></div>;
                         })
                    )}
                </div>
            );
        }
    }

export default GetContact;