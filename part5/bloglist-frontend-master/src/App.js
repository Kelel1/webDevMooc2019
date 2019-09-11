import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import blogService from './services/blogs'
import Blog from './components/Blog'
import Form from './components/Form'
import Notification from './components/Notification'
import CreateBlog from './components/CreateBlog'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [blogsVisible, setBlogsVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [validation, setValidation] = useState(null)
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  
  

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
      setErrorMessage('Wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleCreate = async (event) => {
    event.preventDefault()     
    try {
      const newObject = {
        "title": title,
        "author": author,
        "url": url
      }    
    const createBlog = await blogService
      .create(newObject)    
    setBlogs(blogs.concat(createBlog))
    setValidation(`New blog ${ newObject.title } by ${ newObject.author } added.`)
    setTimeout(() => {
      setValidation(null)
    }, 5000)
    setTitle('')
    setAuthor('')
    setUrl('')  
    } catch(exception) {
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
  const createBlogForm = () => {
    const hideWhenVisible = { display: blogsVisible ? 'none' : '' }
    const showWhenVisible = { display: blogsVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setBlogsVisible(true)}>Create Blog</button>
        </div>
        <div style={showWhenVisible}>
          <CreateBlog handleCreate = { handleCreate } title = { title }
                    author = { author } url = { url } setTitle = { setTitle } setAuthor = { setAuthor } setUrl = { setUrl }/>
          <button onClick={() => setBlogsVisible(false)}>Cancel</button>
        </div>
      </div>
      
    )
  }

  if (user === null) {
    return (
      <div>
        <h1>
          Log into Blog-List        
        </h1>
        <Notification validation = { validation } errorMessage = { errorMessage } />
        <Form handleLogin = { handleLogin } setUsername = { setUsername } setPassword = { setPassword }
              username = { username } password = { password }/>
      </div>
    )
  }

  return (
    <div>
      <h2>Blogs</h2>
      <Notification validation = { validation } errorMessage = { errorMessage } />
      <p> {user.name} logged in <button onClick={handleLogout}>Logout</button></p>
      <h2>Create new blog</h2>
      { createBlogForm() }
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      
    </div>
  )
}

export default App;
