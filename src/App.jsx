import './App.css'
 import { useState } from 'react'
import Menu from './components/Menu'
import StartGame from './components/Game'

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
        : <StartGame 
          difficulty={difficulty} 
          range={range}/>

      }
      
      
    </>
  )
}

export default App
