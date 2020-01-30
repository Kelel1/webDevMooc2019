import React, { useState } from 'react'

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
            <input
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
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