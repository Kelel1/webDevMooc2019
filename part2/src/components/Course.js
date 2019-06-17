import React from 'react'
const Course = ({ courses }) => {
    return (
        
        <div>
          
            <Header courses={courses}/>            
            <Content courses={courses}/>  
            <Total courses={courses}/>               

        </div>
        
    )
}

const Header = ({ courses }) => {

    return (
      
      <div>        
        <h2>{courses.name}</h2> 
      </div>     
                
    )
}
const Content = ({ courses }) => {

    return ( 
        <div>
          <Part name={courses.parts.map(part => <div key={part.id}><br></br>{part.name} {part.exercises}</div>)}/>         
        </div>      
            
    )
}

const Total = ({courses}) => {

    return (
        <div>
            <h4> total of {courses.parts.map(num => num.exercises).reduce((total, value) => total += value)} exercises </h4>
            
        </div>
    )
}
const Part = ({ name, exercises }) => {    

    return (  
               
          <div>
            
            {name}{exercises} 
                   
          </div>
                           
    )
}

export default Course