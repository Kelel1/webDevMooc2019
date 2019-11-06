import   React     from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const display = props.notify
  
  const showVoted = () => {
    return display.message
  }
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display : ''
  }

  if (showVoted()) {
    return (
      <div style={style}>
        {`${showVoted()}`}
      </div>
    )
  } 
  return (
    <div></div>
  )
  
}
const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  // console.log(state)
  return {
    anecdotes: state.anecdotes,
    notify: state.notify,
    search: state.search
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification