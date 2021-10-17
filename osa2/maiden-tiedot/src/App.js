import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = process.env.WEATHER_API_KEY;

function App() {
  const [ searchResult, setSearchResult ] = useState( [] );
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ single, setSingle ] = useState( [] );

  const handleInputChange = e => setSearchTerm( e.target.value );

  useEffect( () => {  // TODO add catch blcok
    //console.log( '1 fetch effect' );
    if ( searchTerm.length > 0 ) {

      // 1. create new object
      let singleCountry = {};

      axios.get( `https://restcountries.com/v3.1/name/${ searchTerm }` )
      .then( response => {
            setTimeout(() => {  // to fix fetch issue
              setSearchResult( response.data );
            }, 1000)
            singleCountry.info = response.data[ 0 ];

            let capitalName = response.data[ 0 ].capital;

            // Get weather info
            axios.get(
                `http://api.weatherstack.com/current?access_key=77df71827e374ed1e99c7604a7330ab0&query=${ capitalName }&unit=m` ) //TODO: change apiKey to env var
            .then( response => {
                  singleCountry.weather = response.data;
                } );

            setTimeout(() => {  // to fix weather fetch issue
              setSingle( singleCountry );
            }, 1000)
          } );
      console.log( 'singleCountry object in 2 effect: ', singleCountry );

    }
  }, [ searchTerm ] );

  const content = () => {
    if ( searchResult.length === 1 && single.weather !== null && single.info !== null ) {
      let country = single.info;
      let weather = single.weather.current;
      //console.log( 'weather in content: ', weather );


      // loop through languages object and add entires to laguages array
      let languages = [];
      for ( const [ key, value ] of Object.entries(
          country.languages ) ) {languages.push( value );}
      return (
          <>
            <h2>{ country.name.common }</h2>
            <p>Capital: { country.capital }</p>
            <p>Population: { country.population }</p>
            <h4>Languages</h4>
            <ul>
              { languages.map( lang => <li key={ lang }>{ lang }</li> ) }
            </ul>
            <img alt={'flag'} width={ 200 } src={ country.flags.svg }/>
            <h4>Weather in { country.capital }</h4>
            <p>Temperature: { weather.temperature } Celcius</p>
            <img alt={'weather-icon'} src={weather.weather_icons[0]} />
            <p>Wind speed: {weather.wind_speed}</p>
          </>
      );
    } else if ( searchResult.length <= 10 ) {
      return (
          searchResult.map(
              country => <p key={ country.cca2 }>{ country.name.common }
                <button onClick={ ( e ) => setSearchTerm(
                    country.name.common ) }>Show
                </button>
              </p> )
      );
    } else {
      return <p>Too many matches, specify another filter</p>;
    }
  };

  return (
      <div className="App">
        Find countries: <input onChange={ handleInputChange }/>

        <div className={ 'Details' }>
          { content() }

        </div>
      </div>
  );
}

export default App;
