import Score from "./Score";
import { useState, useEffect } from "react";
import '../styles/Game.css';



function StartGame({difficulty, range}) {
    const [data, setData] = useState(false);
    const key = import.meta.env.VITE_API_KEY;
 
    useEffect(() => {
   
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${range}&offset=0&rating=g&bundle=messaging_non_clips`)
     
             .then(response => response.json())
             .then(json => {
                setData(json)       
             })

        
      }, [range, key]);
      if(!data) return;
      return (
        <>
           <Game
            range={range}
            data={data}
            
            />
           
        </>
      )

}



function Game({ range, data,}) {
    const [load, setLoad] = useState(false)
    const [score, setScore] = useState({
        score: 0,
        highScore: 0,
    })
    const [memory, setMemory] = useState([])
    const cards = shuffle(data.data)
    let name = null;
    let current = []


    function shuffle(array) {
        let currentIndex = array.length;
        let newArray = array
        while(currentIndex !=0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [newArray[currentIndex], newArray[randomIndex]] = [
                newArray[randomIndex], newArray[currentIndex]];
        }
        return newArray
    }

    function gameOver() {
        if(score.highScore < score.score) {
            setScore({score: 0, highScore: score.score})
        }else {
            setScore({...score, score: 0})
        }

        setMemory([])
        //const endDisplay = document.querySelector
    }

    function inputEvent(e) {
        if(memory.includes(e.id)) {
             return gameOver()
        }
        setMemory([...memory, e.id])
        setScore({...score, score: score.score + 1})
    }

    function loaded(e){
        if(!load) {
            current.push(e.target)
            const currentProgress = Math.floor((current.length / cards.length) * 100)
            const progressBar = document.querySelector('.progress');
            progressBar.textContent = currentProgress
            progressBar.style.width = `${currentProgress}%`
            if(current.length === cards.length) {
                setLoad(true)
                current = []
                document.querySelector('.game').style.display = "block"
                document.querySelector('.loading-bar').style.display = "none"
    
            }
        }
    }



    if(range < 10) {
        name = "gif-l"
    } else if (range < 15) {
        name = "gif-m"
    } else {
        name = "gif-s"
    }  
   
 
    return (
        <>
            <div className="game-over">
            </div>
            <div className="loading-bar">
                <h1 className="loading-title">Loading...</h1>
                <div className="progress-bar progress"></div>
            </div>
            <div className="game">
                <Score
                score={score.score}
                highScore={score.highScore}
                range={range}
                />
                <div className="card-container">
                    {cards.map((gif, index) => (
                        <img 
                        key={index}  
                        className={name} 
                        id={gif.id}  
                        src={gif.images.original.url} 
                        onClick={(e) => inputEvent(e.target)} 
                        onLoad={(e) => loaded(e)} 
                        />
                    ))}
                </div>
            </div>
        </>

    )
};






export default StartGame;