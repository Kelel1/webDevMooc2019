import React from 'react'
import { castVote } from '../reducers/anecdoteReducer'

const ListAnecdotes = (props) => {
  const anecdotes = props.store.getState()
  const vote = (id) => {
    console.log(id)
    props.store.dispatch(castVote(id))
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