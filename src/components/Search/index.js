import React, { useState } from 'react';
import AutoComplete from './Autocomplete';
import { connect } from 'react-redux';

import fetchData from './../../fetchData';
import { bindActionCreators } from 'redux';

const Search = ({ kings, locations, fetchData }) => {
  const [kingInput, setKingInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  console.log('kings:', kings);
  console.log('locations', locations);
  const fetchQuery = () => {
    let url = 'http://localhost:3000/search?';
    if (!!kingInput) {
      url = url.concat(`king=${kingInput}&`);
    }
    if (!!locationInput) {
      url = url.concat(`location=${locationInput}`);
    }
    fetchData(url);
  };
  return (
    <div className="search">
      <AutoComplete
        label="King"
        data={kings}
        onChange={(king) => setKingInput(king)}
      />
      <AutoComplete
        label="Location"
        data={locations}
        onChange={(location) => setLocationInput(location)}
      />
      <button onClick={fetchQuery}>Search</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  kings: state.kings,
  locations: state.locations,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
