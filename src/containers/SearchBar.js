import React from 'react';
import { connect } from 'react-redux';
import { filter_persons } from '../actions/rootActions.js';
import './SearchBar.scss';

class SearchBar extends React.Component {

    onChange = (e) => {
        this.props.filter_persons(e.target.value)
    }

    render() {
        return (
            <div className="search-bar">
                <h1>Rechercher un contact...</h1>
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