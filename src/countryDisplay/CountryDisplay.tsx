import React from 'react'

export default function CountryDisplay(prop: any) {

    return (
        <div id="country-result">
            <h2>
                {prop.country.name} ({prop.country.nativeName})
            </h2>
            <img src={prop.country.flag} alt="no flag found" />
            <p>
                Population: {prop.country.population.toLocaleString('en', { maximumFractionDigits: 0 })}
            </p>
            <p>
                Languages: {prop.country.languages[0].name}
            </p>
            <p>
                Currencies: {prop.country.currencies[0].name} ({prop.country.currencies[0].code})
            </p>
            <p>
                Continent: {prop.country.subregion}
            </p>
        </div>
    )
}
