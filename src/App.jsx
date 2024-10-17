import './App.css'
import Score from './components/Score'
import { useState } from 'react'
import Menu from './components/Menu'
import StartGame from './components/Game'

function App() {
  const [score, setScore] = useState({
    score: 0,
    highScore: 0,
  })
  const [difficulty, setDifficulty] = useState(undefined)
  const [range, setRange] = useState(15)

  return (
    <>
      <div onClick={() => location.reload()} className='title'>
        <h1>GifShuffle</h1>
        <h2>Try to memorize the Gifs!</h2>
        <p className='return-text'>Return to Main Menu</p>
      </div>
      {
        difficulty === undefined 
        ? 
        <Menu 
          setDifficulty={setDifficulty} 
          setRange={setRange} 
          range={range}
        /> 
        : 
        <>
          <Score
            score={score.score}
            highScore={score.highScore}
            range={range}
            setScore={setScore}
          />
          <StartGame 
            range={range}
            score={score}
            setScore={setScore}
          />
        </>
      }
    </>
  )
}

export default App