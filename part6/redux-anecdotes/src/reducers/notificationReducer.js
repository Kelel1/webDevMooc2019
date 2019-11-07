const initialState = {
  notify: 0,
  message: ''
}
const notifyReducer = (state = initialState, action) => {
  switch(action.type) {
    case'NOTIFY':
      
      return {
        message: action.message,
        notify:  action.notify
      }
    case'REMOVE':
      return state = {}
    default:
      return state
  }
}      

export const showNotification = (message, notify) => {
  return async dispatch => {  
    dispatch({
      type: 'NOTIFY',
       message,
    })

    setTimeout(() => {
      dispatch({
        type: 'REMOVE',
      })
    }, notify)

    
      
  }
}

export default notifyReducer