const initialstate = {
  search: ''
}
const filterReducer = (state = initialstate, action) => {
  
  switch(action.type) {
    case'SEARCH':
      const toSearch = {
        search: action.data.search.toLowerCase()
      }
      return toSearch
    default:
      return state
  }
  
}

export const filter = (search) => {
  return {
    type: 'SEARCH',
    data: {
      search
    }
  }
}

export default filterReducer