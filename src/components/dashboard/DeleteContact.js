import React from 'react';
import axios from 'axios';
import AdminContact from '../layouts/AdminContact';

import './DeleteContact.scss';

class DeleteContact extends React.Component {
    state = {
        contacts: []
    };

    componentDidMount() {
        this.getContacts();
    }

    getContacts = () => {

        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/contact/all_fields'
        if (process.env.NODE_ENV === 'production') {
        pathApi = process.env.REACT_APP_PATH_API_PROD + '/contact/all_fields'
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
                <>
                    <AdminContact />
                </>
            )
        }
}

export default DeleteContact;