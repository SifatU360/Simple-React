import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './Todo'
import Singer from './Singer'
import Actor from './Actor'
import Library from './Library'

function App() {
  const [count, setCount] = useState(0);
  const singers = ['Adele', 'Beyonce', 'Taylor Swift', 'Ed Sheeran'];
  const actors = [
    {id: 1,name: 'Leonardo DiCaprio', age: 48, bestMovie: 'Inception'},
    {id: 2,name: 'Meryl Streep', age: 71, bestMovie: 'The Devil Wears Prada'},
    {id: 3,name: 'Denzel Washington', age: 66, bestMovie: 'Training Day'},
    {id: 4,name: 'Scarlett Johansson', age: 36, bestMovie: 'Lost in Translation'},
    {id: 5,name: 'Tom Hanks', age: 64, bestMovie: 'Forrest Gump'}
  ]

  const books = [
    {id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee'},
    {id: 2, title: '1984', author: 'George Orwell'},
    {id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'},
    {id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger'},
    {id: 5, title: 'Physics Fundamentals', author: 'David Halliday'}
  ]

  return (
    <>
      <h1>Simple React</h1>
      <Library books = {books}></Library>

      <h2>Actors List:</h2>

      {
        actors.map(actor => <Actor actor={actor} key={actor.id}></Actor>)
      }

      {
        singers.map(singer => <Singer name={singer} key={singer} />)
      }

      <ToDo task="Learn React Basics" isDone={true} time={5} />
      <ToDo task="Build a React App" isDone={false} />
      <ToDo task="Master React Hooks" isDone={true} time={3} />
    </>
  )
}

// function Player({Name, Runs, Division}) {
//   return (
//     <div>
//       <h2>Player Section</h2>
//       <h3>Name : {Name}</h3>
//       <h4>Runs : {Runs}</h4>
//       <h4>Division : {Division}</h4>
//     </div>
//   )
// }

export default App
