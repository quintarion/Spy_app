import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../containers/SearchBar';
import FilterPersonList from '../../containers/FilterPersonList';
//import './SearchPerson.scss';

const SearchPersonTwo = () => {
    return (
        <div className='searchPerson'>
            <SearchBar/>
            <FilterPersonList/>
        </div>
    )
}

export default connect(null)(SearchPersonTwo);