import React from 'react'
const CreateBlog = (props) => {
  return (
    <form onSubmit={(props.handleCreate)}>
      <div>
                title:
        <input
          {...props.title}
          name="Title"
        />
        <div>
                author:
          <input
            {...props.author}
            name="Author"
          />
        </div>
        <div>
                url:
          <input
            {...props.url}
            name="Url"
          />
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default CreateBlog