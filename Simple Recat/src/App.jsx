import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Simple React</h1>
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
