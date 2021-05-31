import React from 'react';
import Countrys from './Countrys';
import CountryDetail from './CountryDetail';

const CountryList = ({ filterCountry }) => {
    if (filterCountry.length === 1) {
        return (
            <CountryDetail country={filterCountry[0]} />
        )
    }
    else if (filterCountry.length <= 10) {
        return (
            filterCountry.map((country, index) =>
                <Countrys key={index} country={country} />
            )
        )
    }
    else {
        return (
            <>Too many matches,try to be specific</>
        )
    }
}

export default CountryList;