import React from 'react';
import axios from 'axios';
import SourceData from "../../assets/continents.json";

    class SearchBox extends React.Component {
      state = {
        value: "",
        sourceData: SourceData,
        filterData: SourceData
      };
    
      filterList = e => {
        const updatedList = this.state.sourceData.filter(item => {
          return (
            item.continent.toLowerCase().search(e.target.value.toLowerCase()) !== -1
          );
        });
        this.setState({ filterData: updatedList });
      };

      render() {
        const searchBox = (
          <input
            type="text"
            onChange={this.filterList}
          />
        );
        const selectBox = this.state.filterData.map(option => (
          <li key={option.continent}>{option.continent}</li>
        ));
    
        return (
          <React.Fragment>
            <h2>Step 1</h2>
            <h3>Select a continent.</h3>
            {searchBox}
            {selectBox && <ul>{selectBox}</ul>}
          </React.Fragment>
        );
      }
    }

export default SearchBox;