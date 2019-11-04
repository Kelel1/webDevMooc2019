import   React                                  from 'react'
import { connect                              } from 'react-redux'
import { castVote                             } from '../reducers/anecdoteReducer'
import { showNotification, removeNotification } from '../reducers/notificationReducer'

const AnnecdoteList = (props) => {
  const anecdotes = props.anecdotes
  const filter = props.search
  const filterTarget = anecdotes.filter((n) => n.content.toLowerCase().includes(filter.search))
  const vote = (id) => {
    
    props.castVote(id)
    props.showNotification('You voted for: ', id)
    setTimeout(() => props.removeNotification(id),5000) 
  }

  return (
    filterTarget.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )
  )
}

const mapStateToProps = (state) => {
 
  return {
    anecdotes: state.anecdotes,
    notify: state.notify,
    search: state.search
  }
}
const mapDispatchToProps = {
  castVote,
  showNotification,
  removeNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps  
)(AnnecdoteList)
export default ConnectedAnecdotes