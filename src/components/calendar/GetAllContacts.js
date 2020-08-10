import React, {Component} from 'react';
import axios from 'axios';
import List from './List';
import SearchBar from './SearchBar';

// IMPORT CONFIG 
const config = require('../../config/config');

class GetAllContacts extends Component {
    state = {
        //1) enter a contact name in the searchBar input
        contacts: [],
        //2) the name entered is sent to the store
        store: [],
        //when the user clicks on a name a menu is displayed on the screen :
        displayMenu: false, 
        //adding a loader :
        isloaded: false,
    }

/**
 * Get contact list in the database
 */

  componentDidMount() {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/contact/show_client';
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/contact/show_client';
    }

    axios.get(`${pathApi}`) 
    .then(res => res.data.map(result => (
        {
          name: `${result.idperson} ${result.firstname} ${result.lastname}`,
          id: `${result.idperson}`,
        })))
      .then(newData => this.setState({contacts: newData, store: newData, isloaded: true}))
      .catch(error => alert(error))
    }

    //
    filterNames = (event) => {
        this.setState({contacts: this.state.store.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()))})
    }

  render() {
    const {isloaded, displayMenu} = this.state
      return (
        console.log(this.state),
          <>
            {!isloaded ? 
            (<div>Loading...</div>) :
            (<div className="search">
              <SearchBar filterNames={(event) => this.filterNames(event)}/>
              <List {...this.state} handleClick={this.handleClick}/>
            </div>
            )
            }
          </>
        );
    }
}

export default GetAllContacts;