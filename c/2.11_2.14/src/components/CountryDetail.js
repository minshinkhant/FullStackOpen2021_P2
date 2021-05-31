import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetail = ({ country }) => {
    const [weather, setWeather] = useState([])
    //weather hook
    const api_key = process.env.REACT_APP_API_KEY
    const capital = country.capital
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
    console.log(url)
    const hook = () => {
        axios.get(url)
            .then(response => {
                setWeather(response.data)
            })
    }
    useEffect(hook, [url])
    console.log(weather)

    return (

        <div>
            console.log(weather)
            <h1>{country.name}</h1>
            <div>Capital : {country.capital}</div>
            <div>Population : {country.population}</div>
            <h1>Languages</h1>
            <ul>{country.languages.map((language, index) =>
                <li key={index}>{language.name}</li>)}
            </ul>
            <img src={country.flag}
                alt={country.name + "flag"}
                width="200" height="100"></img>
            <h1>Weather in {country.capital}</h1>
            <div>Temp : {weather.main.temp} Celcius</div>
            <div>Feels Like : {weather.main.feels_like} Celcius</div>
            <div>Description: {weather.weather[0].description}</div>
            <div>Wind : {weather.wind.speed} mph</div>
        </div>

    )
}

export default CountryDetail;