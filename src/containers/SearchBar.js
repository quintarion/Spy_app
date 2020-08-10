import React from 'react';
import { connect } from 'react-redux';
import { filter_persons } from '../actions/index';

class SearchBar extends React.Component {

    onChange = (e) => {
        this.props.filter_persons(e.target.value)
    }

    render() {
        return (
            <div>
                <h1>Contact</h1>
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