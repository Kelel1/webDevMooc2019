import React from 'react'
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

  export default Form