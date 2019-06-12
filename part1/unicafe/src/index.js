import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = ({text, value}) => {

  if (text === 'positive') {
    return(

      <div>
        <table>          
          <tbody>
            <tr>
              <td style={{width:'50px'}}>{text}</td>
              <td style={{width:'50px'}}>{Number((value).toFixed(1))+' %'}</td>
            </tr>  
          </tbody>        
        </table>
      </div>
    )
  }
  return(

    <div>
     <table>
       <tbody>
          <tr>
            <td style={{width:'50px'}}>{text}</td>
            <td style={{width:'50px'}}>{Number((value).toFixed(1))}</td>
          </tr>       
        </tbody>   
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  

  const all = good + neutral + bad

  const handleClickGood = (props) => {
    setGood(good + 1)
  }

  const handleClickNeutral = (props) => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = (props) => {
    setBad(bad + 1)
  }  

  if (all === 0) {
    return (
      <div>
        <h1>
          give feedback
        </h1>
        <div>     
          <Button handleClick={handleClickGood} text='good'/>
          <Button handleClick={handleClickNeutral} text='neutral'/>
          <Button handleClick={handleClickBad} text='bad'/>     
      
        </div>      
        <h2>statistics</h2>
        <div>
          No feedback given
        </div>

      </div>   
      
    )
  }

  return (
    <div>
      <h1>
          give feedback
      </h1>
    <div>     
      <Button handleClick={handleClickGood} text='good'/>
      <Button handleClick={handleClickNeutral} text='neutral'/>
      <Button handleClick={handleClickBad} text='bad'/>     
      
    </div>      
    <h2>statistics</h2> 
      <Statistics text='good' value={good}/>
      <Statistics text='neutral' value={neutral}/>
      <Statistics text='bad' value={bad}/>
      <Statistics text='all' value={all}/>
      <Statistics text='average' value={((good * 1) + (neutral * 0) + (bad * -1)) / (all)}/>
      <Statistics text='positive' value={(good / (all))*100}/>       

    </div>
  )  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)