import React from 'react'

import personService from '../services/persons'

const Delete = ({id, setPersons, persons}) => {

    const removePerson = id => {
        const person = persons.find(p => p.id === id)

        if(window.confirm(`Delete ${person.name} ?`)) {
          personService
          .deleteId(id, person)
          .then(() => {
            setPersons(persons.filter(p => p.id !== id))
           
          })
        }
    
        
          
        }


    return (
        <button onClick={() => removePerson(id)}>delete</button>
    )
}

export default Delete