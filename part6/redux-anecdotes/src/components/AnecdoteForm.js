import   React                   from 'react'
import { connect            }    from 'react-redux' 
import { createAnecdote     }    from '../reducers/anecdoteReducer'
import { removeNotification,
         showNotification   }    from '../reducers/notificationReducer'
import anecdoteService           from '../services/anecdotes'   


const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    props.createAnecdote(newAnecdote)

    props.showNotification('You created: ', newAnecdote.id)
    setTimeout(() => props.removeNotification(newAnecdote.id), 5000) 
    
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

