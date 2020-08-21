import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../containers/SearchBar';
import FilterPersonList from '../../containers/FilterPersonList';
import './SearchPerson.scss';

const SearchPerson = () => {
    return (
        <div className='searchPerson'>
            <div>
                <SearchBar/>
                <FilterPersonList/>
            </div>
        </div>
    )
}

export default connect(null)(SearchPerson);