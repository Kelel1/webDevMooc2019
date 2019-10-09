import React from 'react'
import PropTypes from 'prop-types'
const Form = (props) => {
  return (
    <form onSubmit={props.handleLogin}>
      <div>
          username
        <input
          {...props.username}
          name="Username"
        />
        <div>
          password
          <input
            {...props.password}
            name="Password"
          />
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
Form.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  // username: PropTypes.string.isRequired,
  // password: PropTypes.string.isRequired,
  // setUsername: PropTypes.func.isRequired,
  // setPassword: PropTypes.func.isRequired

}

export default Form