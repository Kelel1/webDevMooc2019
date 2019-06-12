import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {

  return (
    <div>
    <p>Hello {props.name}</p>
  </div>
  )

}

const App = () => {
  

  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello name="Kern" />
      <Hello name="Elder" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))