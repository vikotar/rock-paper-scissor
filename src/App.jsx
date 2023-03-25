import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RPSImage from './components/Tool'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Rock Paper Scissors</h1>
      <h2>You Vs Computer</h2>
      <div className="items">
       <RPSImage item={'rock'}/>
       <RPSImage item={'paper'}/>
       <RPSImage item={'scissors'}/>
      </div>
    </div>
  )
}

export default App
