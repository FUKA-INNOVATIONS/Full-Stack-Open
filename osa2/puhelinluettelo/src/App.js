import React, { useState } from 'react';

const App = () => {

  const [ persons, setPersons ] = useState( [
    { name: 'Arto Hellas', phone: '041 1234567' },
    { name: 'Fuad Kalhori', phone: '020 12121212' },
    { name: 'Matti Luukkanen', phone: '045 1235432' },
  ] );

  const [ newName, setNewName ] = useState( '' );
  const [ newPhone, setNewPhone ] = useState( '' );

  // Add name input value to newName state
  const handleNameChange = e => setNewName( e.target.value );

  // Add New phone input value to state
  const handlePhoneChange =  e => setNewPhone(e.target.value)

  // Add new person to the list
  const handleAddPerson = ( e ) => {
    e.preventDefault();

    let personExists = false;

    // Alert incase name already exists
    persons.forEach( person => {
      if ( person.name.toLowerCase() === newName.toLocaleLowerCase() ) {
        personExists = true;
        alert( `${ newName } is already added to  phonebook` );
      }
    } );

    // Add new person to phonebook
    if ( !personExists ) {
      const newPerson = {
        name: newName,
        phone: newPhone,
      };
      setPersons( persons.concat( newPerson ) );
    }
  };

  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={ handleAddPerson }>
          <div>
            name: <input value={ newName } onChange={ handleNameChange }/>
          </div>
          <div>
            phone: <input value={newPhone} onChange={handlePhoneChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        { persons.map( person =>
            <p key={ person.name }>{ person.name } ({ person.phone })</p>,
        ) }
      </div>
  );

};

export default App;