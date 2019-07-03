import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Search field for specific country
const Search = ({searchCountry, onChange}) => {
    
    return (
        <div>
            find countries <input value={searchCountry}
                            onChange={onChange}/>
        </div>
    )
}

// Display result for selected country
const ShowView = ({handleShowView, state}) => {
    return (
        <button onClick={() => handleShowView(state)}>
            show
        </button>
    )
}

// Display results for filtered country
const Filter = ({handleShowView, nations, nation}) => {  
      
    if(nations.length > 10) {
        
        return(             
            <div>                
                Too many matches. specify another filter                
            </div>
        )
    } else if(nations.length === 1) {            

        return (            
            <div>
                <h1>
                    {nation.name}                                                            
                </h1>
                <p>capital {nation.capital}
                    <br></br>
                    population {nation.population}</p>
                <h3>languages</h3>    
                <ul>
                    {nation.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}       
                </ul>
                <img src={nation.flag} alt={`${nation.name}'s flag'`} height={'100'} width={'120'}/>   
                <h1>Weather in {nation.capital}</h1>                
            </div>
        )
    }
    return (
        <div>
            {nations.map(state => <div key={state}>{state} <ShowView handleShowView={handleShowView} state={state}/></div>)} 
        </div>
    )
}

const App = () => {

    const [searchCountry, setSearchCountry] = useState('')
    const [countries, setCountries] = useState([])    
    
    const [weatherInfo, setweatherInfo] = useState([])

    const handleSearch = (event) => {
        setSearchCountry(event.target.value)
    }
    const handleShowView = (state) => {
        setSearchCountry(state)
        
    } 
    const nations = [...countries].map(state => state.name).filter(country =>
        country.toLowerCase().includes(searchCountry.toLowerCase()) && searchCountry.length > 0)
       
   const nation = countries[countries.findIndex(c => c.name.toLowerCase().includes(searchCountry.toLowerCase()) && searchCountry.length > 0)]


    const hook = () => {
     
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {                              
                setCountries(countries.concat(response.data))                   
            })
    }
    useEffect(hook, [])     
    // ======================================================================================= Code block in question
    const hook1 = (capital) => {
        axios
            .get('http://api.apixu.com/v1/current.json?key=803c703bcf794920bc6204328192706&q='+ capital)
            .then(response => {  
                                
                setweatherInfo(weatherInfo.concat(response.data.current))
            })           
    } 

    useEffect(() => {
        if(nations.length === 1) {               
                return hook1(nation.capital)
            } 
    })
    //========================================================================================= 
    
  
    return(
        <div>            
            <Search searchCountry={searchCountry} onChange={handleSearch}/>
            <Filter handleShowView={handleShowView} nations={nations} nation={nation}/>
        </div>
    )

}

export default App