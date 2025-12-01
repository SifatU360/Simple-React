import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = ({countriesPromise, countriesFlags, countriesIndependent, countriesPopulations}) => {
    const countries = use(countriesPromise);
    const flags = use(countriesFlags);
    const independents = use(countriesIndependent);
    const populations = use(countriesPopulations);

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    
    const handleVisitedCountry = (countryName, visited) => {
        if(visited){
            // Add the country
            const newVisitedCountries = visitedCountries.filter(name => name !== countryName);
            setVisitedCountries(newVisitedCountries);
        } else {
            // Remove the country
            setVisitedCountries([...visitedCountries, countryName]);

        }
    };

    const handleVisitedFlag = (flagUrl, visited) => {
        if(visited){
            // Add the flag
            const newVisitedFlags = visitedFlags.filter(url => url !== flagUrl);
            setVisitedFlags(newVisitedFlags);
        } else {
            // Remove the flag
            setVisitedFlags([...visitedFlags, flagUrl]);
        }
    }
    return (
        <div>
            <h2>Countries List</h2>
            <h2>Visited Countries: {visitedCountries.length}</h2>
            {
                visitedFlags.map((flag, index) =>
                    <img key={index} src={flag} alt="Visited Flag" width="50" height="30" style={{marginRight: '10px'}} />
                )
            }
            <ol>
                 {
                    visitedCountries.map((country, index) =>
                        <li key={index}>{country}</li>
                    )
                 }
            </ol>
            <div className="countries">
                  {
                    countries.map((country, index) => 
                        <Country key={index} 
                            country={country} 
                            flag={flags[index]} 
                            independent={independents[index]} 
                            population={populations[index]} 
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedFlag={handleVisitedFlag}
                        />)
                  }
            </div>    
        </div>
    );
};

export default Countries;