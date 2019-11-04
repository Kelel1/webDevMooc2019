import   React     from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const anecdotes = props.anecdotes
  const display = props.notify

  
  const a  = [...anecdotes]
 
  const b = a.indexOf(a.find(n => n.id === display.notify))  
  const c = {...a[b]}
  
  const showVoted = () => {
    return c.content
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
        {`${display.message} ${showVoted()}`}
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