import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../containers/SearchBar';
import FilterPersonList from '../../containers/FilterPersonList';

const SearchPerson = () => {

  return (
    <div>
        <SearchBar />
        <FilterPersonList />
    </div>
  );
}

export default connect(null)(SearchPerson);