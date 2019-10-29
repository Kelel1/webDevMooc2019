import   React                   from 'react'
import { createAnecdote     }    from '../reducers/anecdoteReducer'
import { removeNotification,
         showNotification   }    from '../reducers/notificationReducer'


const NewAnecdote = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    props.store.dispatch(
      createAnecdote(event.target.anecdote.value)
    )
    // Search by content for new anecdote in store
    const anecdotes = props.store.getState().anecdotes
    const a  = [...anecdotes]
    let b = a.indexOf(a.find(n => n.content === event.target.anecdote.value))
    const c = {...a[b]}

    props.store.dispatch(showNotification('You created: ', c.id))
    setTimeout(() => props.store.dispatch(removeNotification(c.id)), 5000) 
    event.target.anecdote.value = ''
  }

  return(
    <div>
      <h2>Create New Anecdote</h2>
      <form onSubmit={addAnecdote}>
          <input name='anecdote' />
          <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default NewAnecdote