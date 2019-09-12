import React, {useState} from 'react'

const Blog = ({ blog }) => {
  const [clicked, setClicked] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    borderColor: 'gray',
    borderRadius: 5
  }

  return (
    <div style={blogStyle}>
      {clicked ? <div onClick={() => setClicked(false)}>
      {blog.title} {blog.author} <br></br> {blog.url}
      <br></br> {blog.likes} likes <button type="submit">like</button><br></br> added by {blog.user['username']} </div> : <div onClick={() => setClicked(true)}>
      {blog.title} {blog.author}</div>}      
    </div>
  
)}

export default Blog