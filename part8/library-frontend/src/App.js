import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import BirthYear from './components/BirthYear'
import { Query, Mutation } from 'react-apollo'
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

const CREATE_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
    addBook(

      title: $title,
      author: $author,
      published: $published,
      genres: $genres
    ) {
      title
      author
      published
    }
  }
`
const EDIT_BIRTHYEAR = gql`
  
mutation editAuthor($name: String!, $born: Int!) {
  editAuthor(name: $name, born: $born) {
    name
    born
  }  
} 
`

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
  } else if (page === 'books') {
    return (

      <div>
        <div>
          <button onClick={() => setPage('authors')}>authors</button>
          <button onClick={() => setPage('books')}>books</button>
          <button onClick={() => setPage('add')}>add book</button>
        </div>

        <Query query={ALL_BOOKS} pollInterval={2000}>
          {(result) => <Books show={page === 'books'} result={result} />}
        </Query>
      </div>
    )
  } else {
    return (

      <div>
        <div>
          <button onClick={() => setPage('authors')}>authors</button>
          <button onClick={() => setPage('books')}>books</button>
          <button onClick={() => setPage('add')}>add book</button>
        </div>

        <Mutation mutation={CREATE_BOOK}>
          {(addBook) =>
            <NewBook
              addBook={addBook}
            />
          }

        </Mutation>
        <Mutation
          mutation={EDIT_BIRTHYEAR}
        >
          {(editAuthor) => 
            <BirthYear
              editAuthor={editAuthor}
            />
          }
        </Mutation>
      </div>
    )
  }
}

export default App