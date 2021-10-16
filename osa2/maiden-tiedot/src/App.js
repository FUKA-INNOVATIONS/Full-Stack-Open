import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ searchResult, setSearchResult ] = useState( [] );
  const [ searchTerm, setSearchTerm ] = useState( '' );

  const handleInputChange = e => setSearchTerm( e.target.value );



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

      // loop through languages object and add entires to laguages array
      // TODO: Create a new local country object and assign all necessary details to it
      let languages = []
      for (const [key, value] of Object.entries(country.languages)) {languages.push(value)}
      //console.log(languages)

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
