import React from 'react';
import axios from 'axios';
//import countriesList from "./countries.json";

class Search extends React.Component {
    state = {
      search: "",
      contacts: []
    };

    //Get all the contacts into database :
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
  
    renderContact = contact => {
      const { search } = this.state;
  
      /*if( search !== "" && country.lastname.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
          return null
      }*/
  
      return (
        <div>
            <h2 title={contact.lastname}>
                {contact.lastname.substring(0, 15)}
                {contact.lastname.length > 15 && "..."}
            </h2>
        </div>
      );
    };
  
    onchange = e => {
      this.setState({ search: e.target.value });
    };
  
    render() {
      const { search } = this.state;
      const filteredContacts = this.state.contacts.filter(contact => {
        return contact.lastname.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
  
      return (
        <div classLastname="">
          <main>
            <div classLastname="">
              <div classLastname="">
                <div classLastname="">
                  <center>
                    <h3>
                      <a
                        href="https://www.youtube.com/watch?v=RM_nXOyHwN0"
                        target="_blank"
                      >
                        Watch youtube demo here
                      </a>
                    </h3>
                  </center>
                </div>
                <div classLastname="">
                  <input
                    label="Search Contact"
                    icon="search"
                    onChange={this.onchange}
                  />
                </div>
                <div classLastname=""/>
              </div>
              <div classLastname="">
                {filteredContacts.map(contact => {
                  return this.renderContact(contact);
                })}
              </div>
            </div>
          </main>
          {/* <Footer color="indigo">
            <p classLastname="footer-copyright mb-0">
              &copy; {new Date().getFullYear()} Copyright
            </p>
          </Footer> */}
        </div>
      );
    }
  }
  
export default Search;