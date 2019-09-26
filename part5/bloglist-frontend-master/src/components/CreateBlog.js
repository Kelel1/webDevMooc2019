import React from 'react'
const CreateBlog = (props) => {
  return (
    <form onSubmit={(props.handleCreate)}>
      <div>
                title:
        <input
          type="text"
          value={props.title}
          name="Title"
          onChange={({ target }) => props.setTitle(target.value)}
        />
        <div>
                author:
          <input
            type="text"
            value={props.author}
            name="Author"
            onChange={({ target }) => props.setAuthor(target.value)}
          />
        </div>
        <div>
                url:
          <input
            type="text"
            value={props.url}
            name="Url"
            onChange={({ target }) => props.setUrl(target.value)}
          />
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default CreateBlog