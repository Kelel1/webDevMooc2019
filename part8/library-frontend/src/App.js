import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const ALL_AUTHORS = gql`
{
  allAuthors {
    name
    born
    bookCount
  }
}`

const ALL_BOOKS = gql`
{
  allBooks {
    title
    author
    published
  }
}`


const App = () => {
  const [page, setPage] = useState('authors')

  if (page === 'authors') {
    return (

      <div>
        <div>
          <button onClick={() => setPage('authors')}>authors</button>
          <button onClick={() => setPage('books')}>books</button>
          <button onClick={() => setPage('add')}>add book</button>
        </div>

        <Query query={ALL_AUTHORS}>
          {(result) => <Authors show={page === 'authors'} result={result} />}
        </Query>
      </div>
    )
  } else if (page === 'book') {
    return (

      <div>
        <div>
          <button onClick={() => setPage('authors')}>authors</button>
          <button onClick={() => setPage('books')}>books</button>
          <button onClick={() => setPage('add')}>add book</button>
        </div>

        <Query query={ALL_AUTHORS}>
          {(result) => <Books show={page === 'books'} result={result} />}
        </Query>
      </div>
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

     

      <Query query={ALL_BOOKS}>
        {(result) => <Books show={page === 'books'} result={result} />}
      </Query>

      <NewBook
        show={page === 'add'}
      />    
    </div>    
  )
}

export default App