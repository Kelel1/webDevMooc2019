import React from 'react'
import Delete from './Delete'

const Display = ({persons, setPersons, nameToSearch}) => {
  
    return(
      persons.filter(person => person.name.toLowerCase().includes(nameToSearch))
      .map(person => <div key={person.id}>{person.name} {person.number}
      <Delete id={person.id} setPersons={setPersons} persons={persons}/></div>)
    )
  }

export default Display