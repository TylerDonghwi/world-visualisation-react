import React from 'react'
import './CountryDisplay.css'


export default function CountryDisplay({ country }: any) {

    const getBackgroundColor = () => {
        const continent = country.region
        let backColor = 'white'
        if (continent.includes('Asia')) {
            backColor = 'rgba(0,255,0,0.5)'
        } else if (continent.includes('Europe')) {
            backColor = 'rgba(0,0,0,0.5)'
        } else if (continent.includes('Africa')) {
            backColor = 'rgba(255,255,0,0.5)'
        } else if (continent.includes('Americas')) {
            backColor = 'rgba(255,0,0,0.5)'
        } else if (continent.includes('Oceania')) {
            backColor = 'rgba(0,0,255,0.5)'
        }
        return backColor
    }

    return (
        <div className="countryResult" style={{ backgroundColor: getBackgroundColor() }}>
            <h4 className='countryName'>
                {country.name} ({country.nativeName})
            </h4>
            <img className='flag' src={country.flag} alt="no flag found" title={`flag of ${country.name}`} />
            <p>
                Continent: {country.subregion}
            </p>
            <p>
                Population: {country.population.toLocaleString('en', { maximumFractionDigits: 0 })}
            </p>
            <p>
                Languages: {country.languages[0].name}
            </p>
            <p>
                Currencies: {country.currencies[0].name} ({country.currencies[0].code})
            </p>

        </ div >
    )
}
