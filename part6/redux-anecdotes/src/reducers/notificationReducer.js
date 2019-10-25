const initialState = {
  notify: 0,
  message: ''
}
const notifyReducer = (state = initialState, action) => {
  switch(action.type) {
    case'NOTIFY':
      const newNote  = {
        message: action.data.message,
        notify: action.data.notify}
      return newNote
    case'REMOVE':
      return state = {}
    default:
      return state
  }
}      

export const showNotification = (message, notify) => {
  return {
    type: 'NOTIFY',
    data: {
      message,
      notify
    }
  }
}

export const removeNotification = remove => {
  return {
    type: 'REMOVE',
    remove
  }
}

export default notifyReducer