import React, { useState } from 'react';
import axios from "axios"
import './App.css'
import CountryDisplay from "./components/CountryDisplay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [countryName, setCountryName] = useState('')
  const [countryInfo, setCountryInfo] = useState<undefined | any>(undefined)

  const COUNTRIES_BASE_URL = "https://restcountries.com/v2"

  const search = () => {
    axios.get(COUNTRIES_BASE_URL + "/name/" + countryName).then(res => {
      setCountryInfo(res.data)
    }).catch(err => {
      console.log("country not found")
      setCountryInfo(undefined)
    })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      search()
    }
  }

  return (
    <div className='app'>
      <div className='searchBox'>
        <h1>
          Country Search
        </h1>

        <div className='inputBox'>
          <label className='label'>Country Name</label>
          <input
            type="text"
            className='text'
            id="country-name"
            name="country-name"
            placeholder="Enter a country's name"
            onChange={e => setCountryName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className='searchBtn' onClick={search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' /> Search
          </button>
        </div>

      </div>


      {countryInfo === undefined ? (
        <p>Country not found</p>
      ) : (
        <div className='countryContainer'>
          {countryInfo.map((country: any) => (
            <CountryDisplay key={country.name} country={country} />
          ))}
        </div>
      )}

    </div>
  );
}

export default App;
