import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { select_person } from "../actions/index";
import './FilterPersonList.scss';

class FilterPersonList extends Component {
  state = {
    redirect: false
  }

  OnChangeSelect = (id) => {
    this.props.select_person(id)
    console.log('ceci est l\'id sélectionné :', id)
    alert(id);
    // Onclick >> change the redirect state
    this.setState({redirect: true});
  }

  render() {
    const {redirect} = this.state
    return (
      <>
      {!redirect ? 
        (<ul className="filter-person-list">
          {this.props.filter_results.map((person) => {
            return (
              <li onClick={() => this.OnChangeSelect(person.idperson)}><span>{person.firstname}</span> <span>{person.lastname}</span></li>
            );
          })}
        </ul>)
        :
        (<Redirect to="navAddContact"/>)
      }
    </>
    );
  }
}

const mapStateToProps = (state) => {
  const { filter_results } = state.persons
  console.log('map to props :', filter_results)

  return {
    filter_results: state.persons.filter_results

  }
}

const mapDispatchToProps = dispatch => {
  return {
    select_person: (id) => dispatch(select_person(id)) //DO NOT DELETE THE (id) !!!!
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPersonList);