import React from 'react'
const Notification = ({ store }) => {
  const anecdotes = store.getState().anecdotes
  const display = store.getState().notify
  
  const a  = [...anecdotes]
  let b = a.indexOf(a.find(n => n.id === display))
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

//   {showVoted()? <div style={style}>
//   {`You voted for: ${showVoted()}`}
// </div>: <div style={...style.display = 'none'}>
//         {`You voted for: ${showVoted()}`}
//       </div>}
  if (showVoted()) {
    return (
      <div style={style}>
        {`You voted for: ${showVoted()}`}
      </div>
    )
  } 
  return (
    <div></div>
  )
  
}

export default Notification