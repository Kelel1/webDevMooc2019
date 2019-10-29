import React                                    from 'react'
import { castVote }                             from '../reducers/anecdoteReducer'
import { showNotification, removeNotification } from '../reducers/notificationReducer'

const ListAnecdotes = ({store}) => {
  
  // Get states if anecdotes and store
  const anecdotes = store.getState().anecdotes
  const search = store.getState().search

  //  Filter anecdotes based on search
  const filterTarget = anecdotes.filter((n) => n.content.toLowerCase().includes(search.search))
  const vote = (id) => {
    
    store.dispatch(castVote(id))
    store.dispatch(showNotification('You voted for: ', id))
    setTimeout(() => store.dispatch(removeNotification(id)),5000) 
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

export default ListAnecdotes