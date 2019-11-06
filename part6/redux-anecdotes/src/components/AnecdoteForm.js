import   React                   from 'react'
import { connect            }    from 'react-redux' 
import { createAnecdote     }    from '../reducers/anecdoteReducer'
import { showNotification   }    from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    

    props.showNotification(`You created: ${content}`, 10)
    // setTimeout(() => props.removeNotification(content), 5000) 
    
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
}

const ConnectedAnnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnnecdoteForm

