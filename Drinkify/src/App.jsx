import { Suspense } from 'react'
import Drinks from './components/Drinks/Drinks'
import Header from './components/Layout/Header'
import './App.css'

// const drinkPromise = fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
const drinkPromise = fetch("drinkify.json").then(res => res.json());

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h3 style={{textAlign:'center', padding:20}}>Drinks Loading...</h3>}>
        <Drinks drinkPromise={drinkPromise} />
      </Suspense>
    </>
  )
}

export default App
