import { createStore, combineReducers, applMiddleware } from 'redux'
import thunk from 'redux-thunk';

import anecdoteReducer from './reducers/anecdoteReducer'
import searchReducer   from './reducers/filterReducer'
import notifyReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notify:    notifyReducer,
  search:    searchReducer
})

const store = createStore(reducer, applMiddleware(thunk))

export default store