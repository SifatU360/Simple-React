import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://restcountries.com/v3.1/all?fields=name')
  .then(res => res.json());

const countriesFlags = fetch('https://restcountries.com/v3.1/all?fields=flags')
  .then(res => res.json());

const countriesIndependent = fetch('https://restcountries.com/v3.1/all?fields=independent')
  .then(res => res.json());

const countriesPopulations = fetch('https://restcountries.com/v3.1/all?fields=population')
  .then(res => res.json());
function App() {

  return (
    <>
      <Suspense fallback={<h2>Loading Countries...</h2>}>
        <Countries countriesPromise={countriesPromise} countriesFlags={countriesFlags} countriesIndependent={countriesIndependent} countriesPopulations={countriesPopulations} /> 
      </Suspense>
    </>
  )
}

export default App
