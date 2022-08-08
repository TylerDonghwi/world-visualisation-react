import React, { useState } from 'react';
import axios from "axios"

function App() {

  const [countryName, setCountryName] = useState('')

  const COUNTRIES_BASE_URL = "https://restcountries.com/v3.1"

  const search = () => {
    axios.get(COUNTRIES_BASE_URL + "/name/" + countryName).then(res => {
      console.log(res.data)
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

      <div id="country-result">This will show the result</div>
    </div>
  );
}

export default App;
