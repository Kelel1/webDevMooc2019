import React, { useState } from 'react'
import Select from 'react-select'

const options = [

  {value: 'Robert Martin', label: 'Robert Martin'},
  {value: 'Martin Fowler', label: 'Martin Fowler'},
  {value: 'Fyodor Dostoevsky', label: 'Fyodor Dostoevsky'},
  {value: 'Joshua Kerievsky', label: 'Joshua Kerievsky'},
  {value: 'Sandi Metz', label: 'Sandi Metz'},
]

const BirthYear = (props) => {

  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const submit = async (e) => {
    e.preventDefault()

    await props.editAuthor({

        variables: {name, born}
    })

    setName('')
    setBorn('')
  }
  
  return (

    <div>
        <h2>Set Birthyear</h2>
      <div>
        <form onSubmit={submit}>
          <div>
            Name
            {/* <input
              value={name}
              onChange={({ target }) => setName(target.value)}
            /> */}
            <Select  options={options} onChange={(target) => setName(target.value)}/>            
          </div>
          <div>
            Born
            <input
              value={born}
              onChange={({ target }) => setBorn(Number(target.value))}
            />
          </div>
          <button type="submit">update author</button>
        </form>
      </div>
    </div>
  )
}

export default BirthYear