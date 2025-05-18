import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter Application 🔄 </h1>
      <button onClick={() => { setCount(prevCount => prevCount + 1) }}>Count</button>
      <p>The current count it {count}</p>

    </>
  )
}

export default App
