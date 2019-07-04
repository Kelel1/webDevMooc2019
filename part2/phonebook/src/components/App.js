import React, { useState, useEffect } from 'react'
import Display from './Display'
import Form from './Form'
import Filter from './Filter'

import axios from 'axios'

const App = () => {

  const hook = () => {
    
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        
        setPersons(persons.concat(response.data))
      })

  }
  useEffect(hook, [])
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')    

  const [ newNumber, setNewNumber ] = useState('')

  const [ searchName, setSearchName ] = useState('')

  
  const  nameToSearch = searchName.toLowerCase()  

    const addPerson = (event) => {
    event.preventDefault()    

    const personObject = {
        name: newName,
        number: newNumber
    }   
    
    const duplicate = persons.filter((person) => newName === person.name)

    if(duplicate.length > 0) {
      
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')  
      
    } else {
      setPersons(persons.concat(personObject))         
      setNewName('')
      setNewNumber('')  
      
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          console.log(response);
        })

    }
       
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  } 

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} eventHandle={handleSearchChange}/>
     
      <h3>Add a new</h3>
      <Form newName={newName} handleNameChange={handleNameChange} 
            newNumber={newNumber} handleNumberChange={handleNumberChange} onSubmit={addPerson}/>             
      <h2>Numbers</h2>
      <div>        
        <Display persons={persons.filter(person => person.name.toLowerCase().includes(nameToSearch))}/>
      </div>
      
    </div>
  )
}

export default App