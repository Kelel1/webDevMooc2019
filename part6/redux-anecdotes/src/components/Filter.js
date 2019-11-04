import   React        from 'react'
import { connect }    from 'react-redux'
import { filter  }    from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {

    props.filter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Search Anecdotes <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filter,
}

const mapStateToProps = (state) => {
  
  return {
    anecdotes: state.anecdotes,
    search: state.search
  }
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter) 

export default ConnectedFilter