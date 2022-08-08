import React, { useState } from 'react';
import axios from "axios"
import './style/App.css'
import './style/TextField.css'
import './style/CountryDisplay.css'
import CountryDisplay from "./components/CountryDisplay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [countryName, setCountryName] = useState('')
  const [countryInfo, setCountryInfo] = useState<undefined | any>(undefined)
  const [inputStyle, setInputStyle] = useState<string>('label')

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

  const checkInput = () => {
    if (countryName.length === 0) {
      setInputStyle('label')
    } else {
      setInputStyle('label hidden')
    }
  }

  const showLabel = () => {
    setInputStyle('label')
  }

  return (
    <div className='app'>
      <div className='searchBox'>
        <h1 className='title'>
          Country Search
        </h1>

        <div className='inputBox'>
          <input
            type="text"
            className='text'
            id="country-name"
            name="country-name"
            placeholder="Enter a country's name"
            onChange={e => setCountryName(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={checkInput}
            onFocus={showLabel}
          />
          <label
            className={inputStyle}
            htmlFor='country-name'
          >
            Country Name
          </label>
          <button className='searchBtn' onClick={search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' /> Search
          </button>
        </div>
      </div>

      <div className='countryContainer'>
        {countryInfo === undefined ? (
          <p>Country not found</p>
        ) : (
          countryInfo.map((country: any) => (
            <CountryDisplay key={country.name} country={country} />
          ))
        )}
      </div>

    </div>
  );
}

export default App;
