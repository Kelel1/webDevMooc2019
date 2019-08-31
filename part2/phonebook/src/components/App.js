import React, { useState, useEffect } from 'react'
import Display from './Display'
import Form from './Form'
import Filter from './Filter'
import Notification from './Notification'
import personService from '../services/persons'

const App = () => {  
  
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')      
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ validation, setValidation ] = useState(null)
  const [ warning, setWarning ] = useState(null)
  
  const  nameToSearch = searchName.toLowerCase()  

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

    const addPerson = (event) => {
    event.preventDefault()    

    const personObject = {
        name: newName,
        number: newNumber
    }   
    // Check if duplicate name is already in the phonebook
    const duplicate = persons.filter((person) => newName === person.name)
   
    const replaceNumber = () => {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const findName = duplicate[0]
        const id = duplicate[0].id
        const changeNumber = {...findName, number: newNumber}
        setValidation(`${findName.name}'s number successfully updated`)
        setTimeout(() => {
          setValidation(null)
        }, 5000)
        personService
          .update(id, changeNumber)
          .then(returnedPerson => {setPersons(persons.map(person => person.id !== id ? person: returnedPerson))})
          .catch(error => {
            
            setValidation(null)             
            setWarning(`${personObject.name} has already been removed from server.`)            
            setPersons(persons.filter(p => p.id !== id))
            setNewName('')
            setNewNumber('')
            setTimeout(() => {
              setWarning(null)
            },5000)
          })
          setNewName('')
          setNewNumber('')
          
          
      } else {
        setNewName('')
        setNewNumber('')  

      }
    }

    // If a duplicate name is entered, ask to update number
    if(duplicate.length > 0) {
      replaceNumber()
      
    } else {    
      
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setValidation(`${returnedPerson.name} successfully added to phonebook`)
          setTimeout(() => {
          setValidation(null)
        }, 5000)
          setNewName('')
          setNewNumber('')          
        })
        .catch(error => {
          // Display warnings for names/numbers that are too short          
          setWarning(`${error.response.data.error}`);
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
      <Notification message={validation} warning={warning}/>
      <Filter searchName={searchName} eventHandle={handleSearchChange}/>
     
      <h3>Add a new</h3>                 
      <Form newName={newName} handleNameChange={handleNameChange} 
            newNumber={newNumber} handleNumberChange={handleNumberChange} onSubmit={addPerson}/>             
      <h2>Numbers</h2>
      <div>        
        <Display persons={persons} setPersons={setPersons} nameToSearch={nameToSearch}/>        
      </div>
      
    </div>
  )
}

export default App