import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {

    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
}
const Content = (props) => {

    return (
        <div>
            <Part part={props.parts1} exercise={props.exercise1}/>
            <br></br>
            <Part part={props.parts2} exercise={props.exercise2}/>
            <br></br>
            <Part part={props.parts3} exercise={props.exercise3}/>
        </div>
    )
}
const Total = (props) => {

    return (
        <div>
            <p> Number of exercises {props.exercise + props.exercise2 + props.exercise3}  </p>
        </div>
    )
}
const Part = (props) => {

    return (
        <div>
            {props.part} {props.exercise}            
        </div>
    )
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

  return (

    <div>
        <Header course={course.name} />
        <Content parts1={course.parts[0].name} parts2={course.parts[1].name} parts3={course.parts[2].name}
                exercise1={course.parts[0].exercises} exercise2={course.parts[1].exercises} exercise3={course.parts[2].exercises}/>
        
        <Total  exercise={course.parts[0].exercises} exercise2={course.parts[1].exercises} exercise3={course.parts[2].exercises} />         
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))