import { useState } from 'react';
import './Country.css';
const Country = ({country, flag, independent, population, handleVisitedCountry, handleVisitedFlag}) => {

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // alert(`You have marked ${country.name.common} as visited!`);
        // setVisited(true);
        // setVisited(!visited);
        if(visited === true){
            setVisited(false);
        } else {
            setVisited(true);
        }
        handleVisitedCountry(country.name.common, visited);
        handleVisitedFlag(flag.flags.png, visited);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h2>{country.name.common}</h2>
            <img src={flag.flags.png} alt={`Flag of ${country.name.common}`} />
            <p>Independent: {independent.independent ? 'Yes' : 'No'}</p>
            <p>Population: {population.population.toLocaleString()}</p>
            <button onClick={handleVisited}>
                {
                    visited ? 'Visited' : 'Not Visited'
                }
            </button>
            <button onClick={handleVisited}>
                {
                    visited ? 'Remove Flag' : 'Add Flag'
                }
            </button>
        </div>
    );
};

export default Country;