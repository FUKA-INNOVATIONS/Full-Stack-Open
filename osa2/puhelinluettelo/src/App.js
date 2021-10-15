import React, { useState } from 'react';

const App = () => {

  const [ persons, setPersons ] = useState( [
    { name: 'Arto Hellas', phone: '041 1234567' },
    { name: 'Fuad Kalhori', phone: '020 12121212' },
    { name: 'Matti Luukkanen', phone: '045 1235432' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ] );

  const [ newName, setNewName ] = useState( '' );
  const [ newPhone, setNewPhone ] = useState( '' );

  const [ nameFilter, setNameFilter ] = useState( '' );
  const [ showAll, setShowAll ] = useState( true );

  const personsToShow = showAll ? persons : persons.filter(person => person.name.includes(nameFilter));

  const handleNameFilterChange = e => {

    let filterTerm = e.target.value;
    if ( filterTerm.length > 0)  {
      setShowAll(false)
    }else {
      setShowAll(true)
    }

    setNameFilter( filterTerm );
  }

  // Add name input value to newName state
  const handleNameChange = e => setNewName( e.target.value );

  // Add New phone input value to state
  const handlePhoneChange = e => setNewPhone( e.target.value );

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

        <div>Filter shown with: <input value={ nameFilter }
                                       onChange={ handleNameFilterChange }/>
        </div>

        <h2>Add new</h2>
        <form onSubmit={ handleAddPerson }>
          <div>
            name: <input value={ newName } onChange={ handleNameChange }/>
          </div>
          <div>
            phone: <input value={ newPhone } onChange={ handlePhoneChange }/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        { personsToShow.map( person => <p
            key={ person.name }>{ person.name } ({ person.phone })</p> ) }
      </div>
  );

};

export default App;