import { useState } from 'react';
import axios from "axios"
import './App.css'

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
        <div id="country-result">
          <h1 id="country-result">
            {countryInfo[0].name} ({countryInfo[0].nativeName})
          </h1>
          <img src={countryInfo[0].flag} alt="no flag found" />
          <p>
            Population: {countryInfo[0].population.toLocaleString('en', { maximumFractionDigits: 0 })}
          </p>
          <p>
            Languages: {countryInfo[0].languages[0].name}
          </p>
          <p>
            Currencies: {countryInfo[0].currencies[0].name} ({countryInfo[0].currencies[0].code})
          </p>
          <p>
            Continent: {countryInfo[0].subregion}
          </p>
        </div>
      )}

    </div>
  );
}

export default App;
