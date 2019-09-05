import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import blogService from './services/blogs'
import Blog from './components/Blog'


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
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService
      .getAll().then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  
  const handleLogout = async (event) => {
    event.preventDefault()
    try {
      window.localStorage.clear()
      window.location.reload()
    } catch (exception) {
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    

    }
    
  }

  if (user === null) {
    return (
      <div>
        <h1>
          Log into Blog-List        
        </h1>
        <Form handleLogin = { handleLogin } username = { username } password = { password }
                setUsername = { setUsername } setPassword = { setPassword }/>
      </div>
    )
  }

  return (
    <div>
      <h2>Blogs</h2>
      <p> {user.name} logged in</p>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default App;
