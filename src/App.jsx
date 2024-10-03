import './App.css'
 import { useState } from 'react'
import Menu from './components/Menu'
import Game from './components/Game'

function App() {
  
  const [difficulty, setDifficulty] = useState(undefined)
  const [range, setRange] = useState(16)

  return (
    <>
      {difficulty === undefined 
        ? <Menu 
          setDifficulty={setDifficulty} 
          setRange={setRange} 
          range={range}/> 
        : <Game 
          difficulty={difficulty} 
          range={range}/>

      }
      
      
    </>
  )
}

export default App
