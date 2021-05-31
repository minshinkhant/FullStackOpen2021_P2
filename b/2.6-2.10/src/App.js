import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const filterPersons = persons.filter(person => {
    return person.name.toLowerCase().includes(newFilter.toLowerCase());
  })

  const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.find((item) => item.name === personsObject.name)) {
      window.alert(`${newName} is already added to phonebook`);
    }
    else (
      setPersons(persons.concat(personsObject))
    )

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter}
        handleFilterChange={handleFilterChange} />

      <h2>add a new contact</h2>
      <PersonForm addPerson={addPerson}
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} />
    </div>
  )
}

export default App
