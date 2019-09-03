import React, { useState } from 'react'


const Form = (props) => { 
  return (
    <form onSubmit={props.handleLogin}>
      <div>
        username
        <input
        type="text"
        value={props.username}
        name="Username"
        onChange={({ target }) => props.setUsername(target.value)}
        />
      <div>
        password
          <input
          type="password"
          value={props.password}
          name="Password"
          onChange={({ target }) => props.setPassword(target.value)}
          />
      </div>
      </div>
      <button type="submit">Login</button>
    </form>
  )
}


const App = () => {
  // const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
  }  

  return (
    <div>
      <h1>
        Log into Blog-List        
      </h1>
      <Form handleLogin = { handleLogin } username = { username } password = { password }
              setUsername = { setUsername } setPassword = { setPassword }/>
    </div>
  );
}

export default App;
