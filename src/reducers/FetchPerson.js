//On importe l'action 
import { GET_PERSON, FILTER_PERSONS, SELECT_PERSON } from '../actions/index';

const initState = {
    persons: [],
    filter_results: [],
}

// la fonction prend en paramètre la state que l'on définit et l'action
const fetchPerson = (state = initState, action) => {
    //On fait un switch pour vérifier que l'action en question est le bon
    switch (action.type) {
        case GET_PERSON:
            console.log(action)
            return {
                ...state,
                persons: action.payload.persons
            };
        case FILTER_PERSONS:
            // const {value} = action;
            const regex = new RegExp(`^${action.payload}`, 'i');
            const filter_results = state.persons.filter(person => regex.test(person.firstname, person.lastname));

            //  const filter_results = state.users.filter((val) => val.includes(value.toLowerCase())) 
            
            return { ...state, filter_results };
        case SELECT_PERSON:

            const select_result = state.persons.filter(person => person.idperson === action.payload)
            return { ...state, select_result }
    }
    // si ce n'est pas le bon type d'action, retourne la state d'origine
    return state;
}

export default fetchPerson;