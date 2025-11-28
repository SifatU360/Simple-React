import './App.css'

function App() {

  function handleClick() {
    alert('Button clicked!')
  }

  const handleButton4 = () => {
    alert('Button 4 clicked!')
  }

  const handleButton6 = (n) => {
    const num = n + 5;
    alert('The Sum is: ' + num);
  }

  return (
    <>
      <h1>Vite + React</h1>
      
      <button onClick={handleClick}>Click me</button>

      <button onClick={handleClick}>Click Button 2 !! 'handleClick()'</button>

      <button onClick={function handleButton3() { alert('Button 3 clicked!') }}>Click Button 3</button>

      <button onClick={handleButton4}>Click Button 4</button>

      <button onClick={() => alert('Button 5 clicked!')}>Click Button 5</button>

      <button onClick={() => handleButton6(10)}>Click Button 6</button>
    </>
  )
}

export default App
