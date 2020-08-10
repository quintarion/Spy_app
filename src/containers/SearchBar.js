import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter_persons } from '../actions/index';
import './SearchBar.scss';

class SearchBar extends Component {

    onChange = (event) => {
        this.props.filter_persons(event.target.value)
    }

    render() {
        return (
            <div className="search-bar">
                <h1>Rechercher un contact... cliquer sur le contact sélectionné</h1>
                <input
                    className="form-control"
                    placeholder="Search Contact"
                    onChange={this.onChange}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons:state.persons.value

    };
}

export default connect(mapStateToProps, {filter_persons})(SearchBar);