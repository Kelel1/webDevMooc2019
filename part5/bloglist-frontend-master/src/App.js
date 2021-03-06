import React, { useState, useEffect } from 'react'
import { useField } from './hooks'
import loginService from './services/login'
import blogService from './services/blogs'
import Blog from './components/Blog'
import Form from './components/Form'
import Notification from './components/Notification'
import CreateBlog from './components/CreateBlog'
import Toggable from './components/Togglable'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [validation, setValidation] = useState(null)
  const [user, setUser] = useState(null)
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // const [url, setUrl] = useState('')
  const username = useField('text')
  const password = useField('password')
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')


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

  // Login event-handler
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.value, password: password.value,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      username.to_return.reset()
      password.to_return.reset()
    } catch (exception) {
      setErrorMessage('Wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  // Create blog event-handler
  const handleCreate = async (event) => {
    event.preventDefault()
    try {
      const newObject = {
        'title': title.value,
        'author': author.value,
        'url': url.value
      }
      const createBlog = await blogService
        .create(newObject)
      setBlogs(blogs.concat(createBlog))
      setValidation(`New blog ${ newObject.title } by ${ newObject.author } added.`)
      setTimeout(() => {
        setValidation(null)
      }, 5000)
      title.to_return.reset()
      author.to_return.reset()
      url.to_return.reset()
    } catch(exception) {
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const handleLogout = async () => {
    try {
      window.localStorage.clear()
      window.location.reload()
    } catch (exception) {
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  // Like event handler
  const handleLikes = id => {
    const blog = blogs.find(x => x.id === id)
    const updateLike = { ...blog, likes: blog.likes + 1 }
    blogService
      .update(id, updateLike)
      .then(response =>
        setBlogs(blogs.map(blog => blog.id !== id ? blog : response))
      )
  }

  // Delete Blog event-handler
  const deleteBlog = id => {

    blogService
      .remove(id)
    setBlogs(blogs.filter(b => b.id !== id))
  }

  // Display list of blogs
  const blogList = () => blogs.map(blog =>
    <Blog
      key={blog.id}
      blog={blog} handleLikes={handleLikes}  deleteBlog={deleteBlog} user ={user} />
  )

  // Sort blogs by number of likes
  const sortBlogs = (blogs) => {
    blogs.sort((a, b) => {return b.likes - a.likes})
  }
  if (user === null) {
    return (
      <div>
        <h1>
          Log into Blog-List
        </h1>
        <Notification validation = { validation } errorMessage = { errorMessage } />
        <Form handleLogin = { handleLogin }
          username = { username } password = { password }/>
      </div>
    )
  }

  return (
    <div>
      <h2>Blogs</h2>
      <Notification validation = { validation } errorMessage = { errorMessage } />
      <p> {user.name} logged in <button onClick={handleLogout}>Logout</button></p>
      <h2>Create a new blog</h2>
      <Toggable buttonLabel='Create'>
        <CreateBlog handleCreate = { handleCreate } title = { title }
          author = { author } url = { url } />
      </Toggable>
      {sortBlogs(blogs)}
      {blogList()}
    </div>
  )
}

export default App