const Persons = ({persons}) => {
  return(
      <div className={'persons'}>
        { persons.map( person => <p
            key={ person.name }>{ person.name } ({ person.phone })</p> ) }
      </div>
  )
}

export default Persons;