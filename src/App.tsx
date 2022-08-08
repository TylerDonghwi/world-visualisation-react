import { useState } from 'react';
import axios from "axios"
import './App.css'
import CountryDisplay from "./countryDisplay/CountryDisplay"

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

  return (
    <div>
      <h1>
        Country Search
      </h1>

      <div>
        <label>Country Name</label><br />
        <input type="text" id="country-name" name="country-name" onChange={e => setCountryName(e.target.value)} /><br />
        <button onClick={search}>
          Search
        </button>
      </div>

      <p>You have entered {countryName}</p>

      {countryInfo === undefined ? (
        <p>Country not found</p>
      ) : (
        <CountryDisplay country={countryInfo[0]} />
      )}

    </div>
  );
}

export default App;
