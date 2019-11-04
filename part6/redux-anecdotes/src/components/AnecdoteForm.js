import   React                   from 'react'
import { connect            }    from 'react-redux' 
import { createAnecdote     }    from '../reducers/anecdoteReducer'
import { removeNotification,
         showNotification   }    from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {

  const anecdotes = props.anecdotes

  const addAnecdote = (event) => {
    event.preventDefault()
    
    props.createAnecdote(event.target.anecdote.value)
    
    // Search by content for new anecdote in store
    /**
     * When trying to create a new anecdote, the event handler
     * fails to get the updated state from the store,
     * so is unable to display the notification for the newly
     * created anecdote.
     * I was able to do this prior to implementing connect however.
     */
    
    const a  = [...anecdotes]
    let b = a.length - 1  // The new anecdote should be that last one in the array
    const c = {...a[b]}

    props.showNotification('You created: ', c.id)
    setTimeout(() => props.removeNotification(c.id), 5000) 
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
const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  // console.log(state)
  return {
    anecdotes: state.anecdotes,
    notify: state.notify
  }
}

const mapDispatchToProps = {
  createAnecdote,
  showNotification,
  removeNotification
}

const ConnectedAnnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnnecdoteForm

