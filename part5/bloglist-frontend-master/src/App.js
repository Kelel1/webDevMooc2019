import React, { useState } from 'react'


const Form = ({ handleLogin, username, password, setUsername, setPassword }) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
        type="text"
        value={username}
        name="Username"
        onChange={({ target }) => setUsername(target.value)}
        />
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
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
