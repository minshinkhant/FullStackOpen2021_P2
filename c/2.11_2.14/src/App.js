import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import CountryList from './components/CountryList';


const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const filterCountry = countries.filter(country => {
    return country.name.toLowerCase().includes(newFilter.toLowerCase());
  })

  const countryList = (filterCountry) => {
    return (
      <CountryList filterCountry={filterCountry} />
    )
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter newFilter={newFilter}
        handleFilterChange={handleFilterChange} />
      {countryList(filterCountry)}
    </div>
  )
}
//have a issue with updating useEffect on CountryDetail accessing weatherAPI with different country
//might be the useEffect params is not updating/ not re-randering with the updated params(country.capital)
export default App;
