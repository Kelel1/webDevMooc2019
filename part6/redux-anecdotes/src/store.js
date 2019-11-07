import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk                                             from 'redux-thunk'
import { composeWithDevTools                           } from 'redux-devtools-extension'

import anecdoteReducer                                   from './reducers/anecdoteReducer'
import searchReducer                                     from './reducers/filterReducer'
import notifyReducer                                     from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notify:    notifyReducer,
  search:    searchReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store