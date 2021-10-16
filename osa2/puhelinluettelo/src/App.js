import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import peopleService from './servieces/persons';

const App = () => {

  const [ persons, setPersons ] = useState( [] );
  const [ newName, setNewName ] = useState( '' );
  const [ newPhone, setNewPhone ] = useState( '' );

  const [ nameFilter, setNameFilter ] = useState( '' );
  const [ showAll, setShowAll ] = useState( true );

  useEffect( () => {
    peopleService.getAll().then( response => {
      setPersons( response );
    } );
  }, [] );

  const personsToShow = showAll ? persons : persons.filter(
      person => person.name.includes( nameFilter ) );

  const handleNameFilterChange = e => {

    let filterTerm = e.target.value;
    if ( filterTerm.length > 0 ) {
      setShowAll( false );
    } else {
      setShowAll( true );
    }

    setNameFilter( filterTerm );
  };

  // Add name input value to newName state
  const handleNameChange = e => setNewName( e.target.value );

  // Add New phone input value to state
  const handlePhoneChange = e => setNewPhone( e.target.value );

  // Add new person to the list
  const handleAddPerson = ( e ) => {
    e.preventDefault();

    let personExists = false;

    // Check and alert incase name already exists
    persons.forEach( person => {
      if ( person.name.toLowerCase() === newName.toLocaleLowerCase() ) {
        personExists = true;

        // Update number if user entered new number
        if ( newPhone.length !== 0 ) {
          const updatedPerson = {
            name: person.name,
            number: newPhone,
          };

          let updateConfirmed = window.confirm(`${ person.name } is already added to phonebook, replace the old number with a new one?`)
          if(updateConfirmed) {
            peopleService.upadateNumber( person.id, updatedPerson );
            setPersons( persons.filter( p => p.id !== person.id ).
                concat( updatedPerson ) );
            alert( `${ newName }'s phone number is updated!` );
          }
        } else {
          alert(
              `To update the number, Please write a new number` );
        }
      }
    } );

    // Add new person to phonebook
    if ( !personExists ) {
      const newPerson = {
        name: newName,
        number: newPhone,
      };
      peopleService.create( newPerson ).
          then( returnedPerson => {
            setPersons( persons.concat( returnedPerson ) );
            setNewName( '' );
            setNewPhone( '' );
          } );
    }
  };

  const handleDeletePerson = ( personId ) => {
    let deleteConfirmed = window.confirm( `sure? ${ personId }` );
    if ( deleteConfirmed ) {
      peopleService.deletePerson( personId );
      setPersons( persons.filter( person => person.id !== personId ) );
    }

  };

  return (
      <div className={ 'main' }>
        <h2>Phonebook</h2>
        <Filter nameFilter={ nameFilter }
                handleChange={ handleNameFilterChange }/>

        <h3>Add a new</h3>
        <PersonForm newName={ newName } newPhone={ newPhone }
                    handleSubmit={ handleAddPerson }
                    handleNameChange={ handleNameChange }
                    handlePhoneChange={ handlePhoneChange }/>

        <h3>Numbers</h3>
        <Persons persons={ personsToShow } handleDelete={ handleDeletePerson }/>
      </div>
  );

};

export default App;