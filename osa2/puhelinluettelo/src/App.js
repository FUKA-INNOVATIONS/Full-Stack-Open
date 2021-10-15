import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState( [
    { name: 'Arto Hellas' },
    {name: 'Fuad Kalhori'},
  ] );
  const [ newName, setNewName ] = useState( '' );

  // Add input value to newName state
  const handleNameChange = ( e ) => {
    setNewName( e.target.value );
  };

  // Add new person to the list
  const handleAddName = ( e ) => {
    e.preventDefault();

    let personExists = false;

    // Alert incase name already exists
    persons.forEach(person => {
      if(person.name.toLowerCase() === newName.toLocaleLowerCase()){
        personExists = true;
        alert(`${newName} is already added to  phonebook`)
      }
    })

    // Add new person to phonebook
    if (!personExists) {
      const newPerson = {
        name: newName,
      };
      setPersons( persons.concat(newPerson) );
    }
  };

  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={ handleAddName }>
          <div>
            name: <input value={ newName } onChange={ handleNameChange }/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        { persons.map( person =>
            <p key={person.name}>{ person.name }</p>,
        ) }
      </div>
  );

};

export default App;