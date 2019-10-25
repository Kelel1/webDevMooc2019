import React from 'react'
const Notification = ({ store }) => {
  const anecdotes = store.getState().anecdotes
  const display = store.getState().notify

  
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

export default Notification