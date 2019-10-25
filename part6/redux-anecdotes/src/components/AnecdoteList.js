import React from 'react'
import { castVote } from '../reducers/anecdoteReducer'
import { showNotification, removeNotification } from '../reducers/notificationReducer'

const ListAnecdotes = ({store}) => {
  const anecdotes = store.getState().anecdotes
  // const notify = store.getState().notify
  const vote = (id) => {
    
    store.dispatch(castVote(id))
    store.dispatch(showNotification(id))
    setTimeout(() => store.dispatch(removeNotification(id)),5000) 
  }

  return (
    anecdotes.map(anecdote =>
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