import React, { useState, useEffect } from 'react'


import axios from 'axios'


const Search = ({searchCountry, onChange}) => {
    
    return (
        <div>
            find countries <input value={searchCountry}
                            onChange={onChange}/>
        </div>
    )

}

const ShowView = ({handleShowView}) => {
    return (
        <button type="submit" onClick={handleShowView}>
            show
        </button>
    )
}

const Filter = ({countries, searchCountry, handleShowView}) => {
    const nations = [...countries].map(state => state.name).filter(country =>
         country.toLowerCase().includes(searchCountry.toLowerCase()) && searchCountry.length > 0)

    const flags = [...countries].filter(country =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase()) &&
        searchCountry.length > 0).map(state => state.flag)

    const population = [...countries].filter(country => 
        country.name.toLowerCase().includes(searchCountry.toLowerCase()) &&
        searchCountry.length > 0).map(state => state.population)

    const capital = [...countries].filter(country =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase()) &&
        searchCountry.length > 0).map(state => state.capital)

    const language = [...countries].filter( country =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase()) &&
        searchCountry.length > 0).map(state => state.languages)    
    
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
                    {nations[0]}                        
                </h1>
                <p>capital {capital[0]}
                    <br></br>
                    population {population[0]}</p>
                <h3>languages</h3>    
                <ul>
                    {language[0].map(lang => <li key={lang.name}>{lang.name}</li>)}       
                </ul>
                <img src={flags[0]} alt={'flag'} height={'100'} width={'120'}/>   
            </div>
        )
    }
    return (
        <div>
            {nations.map(state => <div key={state}>{state} <ShowView handleShowView={handleShowView} searchCountry={searchCountry}/></div>)} 
        </div>
    )
}

const App = () => {

    const hook = () => {
        console.log('effect')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('promise fulfilled')              
                setCountries(response.data)                   
            })
    }

    useEffect(hook, [])
    
    const [searchCountry, setSearchCountry] = useState('')
    const [countries, setCountries] = useState([])

    const handleSearch = (event) => {
        setSearchCountry(event.target.value)
    }
    const handleShowView = (state) => {
        console.log('hello')
    }
   
 
    // console.log('countries: ',{...countries.map(state => state.flag)});
    // console.log('kuntry: ',[...countries].map(state => state.name));
    // console.log([...countries].map(state => state.flag).indexOf);
    // const a = countries.filter(c => c.population === 'Angola')
    console.log(countries)
    // console.log('second ',{...a}[0]);

    
    return(
        <div>
            <Search searchCountry={searchCountry} onChange={handleSearch}/>
            <Filter countries={countries} searchCountry={searchCountry} handleShowView={handleShowView}/>
        </div>
    )

}

export default App