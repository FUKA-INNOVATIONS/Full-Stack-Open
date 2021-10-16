import React, { useState, useEffect } from 'react';
import axios from 'axios';

const owAppKey = process.env.OPEN_WATHER_APP_ID;

function App() {
  const [ searchResult, setSearchResult ] = useState( [] );
  const [ searchTerm, setSearchTerm ] = useState( '' );


  const handleInputChange = e => setSearchTerm( e.target.value );

  // TODO add catch blcok
  useEffect( () => {
    if ( searchTerm.length > 0 ) {
      axios.get( `https://restcountries.com/v3.1/name/${ searchTerm }` )
      .then( response => {
            setSearchResult( response.data );
          } );
    }
  }, [ searchTerm ] );

  const content = () => {
    if ( searchResult.length === 1 ) {
      let country = searchResult[ 0 ];

      let weather = {};

      // Fetch weather info
      // TODO add catch blcok, move APPID to headers
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=2c3ba5d05551904c1b1dad12ed71f32b&units=metric&lang=FI`)
      .then(response => {
        let r = response.data

        weather = {
          temp: Math.round(r.main.temp),
          windSpeed: r.wind.speed,
        }
        console.log('Weather object', weather );
      })




      // loop through languages object and add entires to laguages array
      // TODO: Create a new local country object and assign all necessary details to it
      let languages = []
      for (const [key, value] of Object.entries(country.languages)) {languages.push(value)}

      return (
          <>
            <h2>{ country.name.common }</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h4>Languages</h4>
            <ul>
              {languages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>

            <img width={200} src={country.flags.svg} />

            <h4>Weather in {country.capital}</h4>


          </>
      );
    } else if ( searchResult.length <= 10 ) {
      return (
          searchResult.map(
              country => <p key={ country.cca2 }>{ country.name.common } <button onClick={ (e) => setSearchTerm(country.name.common)}>Show</button></p> )
      );
    } else {
      return <p>Too many matches, specify another filter</p>;
    }
  };

  return (
      <div className="App">
        Fing countries: <input onChange={ handleInputChange }/>

        <div className={ 'Details' }>
          { content() }
        </div>
      </div>
  );
}

export default App;
