
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select_person } from "../actions/index";
import { Redirect } from 'react-router-dom';
import './FilterPersonList.scss';

class FilterPersonList extends Component {
  state = {
    redirect: false
  }

  OnChangeSelect = (id) => {
    this.props.select_person(id)
    console.log(id)
    alert(id);
    //Onclick >> change the redirect state
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
              <li onClick={() => this.OnChangeSelect(person.idperson)}> {person.firstname} {person.lastname} </li>
            );
          })}
        </ul>)
        :
        (<Redirect to="displayContact"/>)
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { filter_results } = state.persons
  console.log(filter_results)

  return {
    filter_results: state.persons.filter_results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    select_person: () => dispatch(select_person())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPersonList);