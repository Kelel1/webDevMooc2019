// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,    
//     votes: 0,
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
        const id = action.data.id
        const voteToChange = state.find(n => n.id === id)
        const changedVote = {
          ...voteToChange,
          votes: voteToChange.votes += 1
        }
        state.sort(function(a, b){return b.votes - a.votes})
        return state.map(vote =>
          vote.id !== id ? vote : changedVote
        )
    default:
      return state  
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: content
  }
}

export const castVote = id => {
  return {
    type: 'VOTE',
    data: {
      id: id
    }
  }
}

export default reducer