import React from 'react';
import './SearchBar.scss';
 
const SearchBar = ({filterNames}) => {
  return(
    <>
      <input id="seach" className="searchBar" type="search" placeholder="Rechercher un contact..." onChange={filterNames}/>
    </>
  )
}
 
export default SearchBar;