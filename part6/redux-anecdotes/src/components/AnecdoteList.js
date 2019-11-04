import   React                                  from 'react'
import { connect                              } from 'react-redux'
import { castVote                             } from '../reducers/anecdoteReducer'
import { showNotification, removeNotification } from '../reducers/notificationReducer'

const AnnecdoteList = (props) => {

  const vote = (id) => {
    
    props.castVote(id)
    props.showNotification('You voted for: ', id)
    setTimeout(() => props.removeNotification(id),5000) 
  }

  return (
    props.anecdotesToShow.map(anecdote =>
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

const filterTarget = ({anecdotes, search}) => anecdotes.filter((n) => n.content.toLowerCase().includes(search.search))

const mapStateToProps = (state) => {
 
  return {
    anecdotes: state.anecdotes,
    notify: state.notify,
    anecdotesToShow: filterTarget(state)
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