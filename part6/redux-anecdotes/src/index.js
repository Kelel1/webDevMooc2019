import React             from 'react'
import ReactDOM          from 'react-dom'
import { createStore,
       combineReducers } from 'redux'
import { Provider }      from 'react-redux'
import App               from './App'
import anecdoteReducer   from './reducers/anecdoteReducer'
import notifyReducer     from './reducers/notificationReducer'
import searchReducer     from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notify:    notifyReducer,
  search:     searchReducer
}) 

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)