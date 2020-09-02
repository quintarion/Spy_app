import axios from 'axios';

export const GET_PERSON = 'GET_PERSON'; 
export const FILTER_PERSONS = 'FILTER_PERSONS';
export const SELECT_PERSON = 'SELECT_PERSON';

// Get PERSONs 
export const fetchPersons = (persons) => {
    return {
      type: GET_PERSON,
      payload:{
        persons
      }
     
    }
};

export const fetchAllPersons = () => {
    return (dispatch) => {
      return axios.get("http://localhost:3028/contact/show_contact")
        .then(response => {
          dispatch(fetchPersons(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  // FILTER PERSONS
  export const filter_persons = (value) => {
    return {
      type: FILTER_PERSONS,
      payload: value
    }
  };

  // SELECT ID PERSON
  export const select_person = (id) => ({
    type: SELECT_PERSON,
    payload: id
  })

  // TEST ASMA //

export const DISPLAYIMAGE="DISPLAYIMAGE"

export const displayimage = payload => {
    return {
        type: DISPLAYIMAGE,
        payload
    }
}  