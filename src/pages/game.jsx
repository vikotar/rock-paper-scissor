import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import RPSImage from '../components/Tool'
// import Loader from './components/Loader'
import { getResults } from '../services/game'

function Game() {
  const [picks, setPicks] = useState({
    user: '',
    computer: '',
    })
  const [scores, setScores] = useState({
    user: 0,
    computer: 0,
  })
  const [winner, setWinner] = useState(null)
  const [animation, setAnimation] = useState(false)

  const updateScore = (winnerValue) => {
    if (winnerValue === 'user') {
        setScores({
          ...scores,
          user: scores.user + 1
        })
      }
      if (winnerValue === 'computer') {
        setScores({
          ...scores,
          computer: scores.computer + 1
        })
      }
  }

  const onPlay = async (userItem) => {
    setAnimation(true)
    setTimeout(() => { setAnimation(false) }, 500)
    // let's do some animation before we show the results
    // it makes user feel that something is happening
    await new Promise((resolve) => setTimeout(resolve, 500))
    const computerItem = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
    setPicks({
        user: userItem,
        computer: computerItem,
    })
    // let's calculate who wins
    const winnerValue = getResults(userItem, computerItem)
    setWinner(winnerValue)
    updateScore(winnerValue)
  }

  const onReplay = () => {
    setWinner(null)
    setPicks({
        user: '',
        computer: '',
    })
  }

  const onRPSClick = (value) => {
    console.log(value)
    return () => {
      console.log(value)
      onPlay(value)
    }
  }

  return (
    <div className="App">
      <div>
        {
          winner === 'user' ? <h2>You Win!</h2> : winner === 'computer' ? <h2>Computer Wins!</h2> : winner === 'tie' ? <h2>It's a tie!</h2> : null
        }
      </div>
      <div>
        <h2>Score</h2>
        <p>User: {scores.user}</p>
        <p>Computer: {scores.computer}</p>
      </div>
      <h1>Rock Paper Scissors</h1>
      <h2>You Vs Computer</h2>
      { picks.user && picks.computer ? (<div className="items">
      <RPSImage item={picks.user} text='your pick'/>
      <RPSImage item={picks.computer} text='computer pick'/>
     </div>)
      :(<div className="items">
       <RPSImage item={'rock'} onClick={onRPSClick('rock')} spin={animation}/>
       <RPSImage item={'paper'} onClick={onRPSClick('paper')} spin={animation}/>
       <RPSImage item={'scissors'} onClick={onRPSClick('scissors')} spin={animation}/>
       </div>)}
       {
          winner && <button onClick={onReplay}
          >Play Again</button>
       }
    </div>
  )
}

export default Game
