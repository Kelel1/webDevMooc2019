
const notifyReducer = (state = 0, action) => {
  switch(action.type) {
    case'NOTIFY':
      return state = action.notify
    case'REMOVE':
      return state = 0
    default:
      return state
  }
}      

export const showNotification = notify => {
  return {
    type: 'NOTIFY',
    notify
  }
}

export const removeNotification = remove => {
  return {
    type: 'REMOVE',
    remove
  }
}

export default notifyReducer