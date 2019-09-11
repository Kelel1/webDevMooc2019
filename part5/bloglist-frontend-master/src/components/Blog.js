import React from 'react'
const Blog = ({ blog }) => {
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
      <div onClick={() => console.log('clicked')}>
        {blog.title} {blog.author}
      </div>
    </div>
  
)}

export default Blog