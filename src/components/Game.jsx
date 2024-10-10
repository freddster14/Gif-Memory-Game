import Score from "./Score";
import { useState, useEffect } from "react";
import '../styles/Game.css';



function StartGame({difficulty, range}) {
    const [data, setData] = useState(false);
    const key = import.meta.env.VITE_API_KEY;
    window.addEventListener("DOMContentLoaded", () =>{
        console.log("DOM loaded")
    })

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
            difficulty={difficulty}
            range={range}
            data={data}
            handleData={setData}
            />
        </>
      )

}



function Game({ difficulty, range, data, handleData, }) {

    const [score, setScore] = useState({
        score: 0,
        highScore: 0,
    })
    const [memory, setMemory] = useState([])
    const array = shuffle(data.data)

    let name = null;
    

    function shuffle(array) {
        let currentIndex = array.length;
        let newArray = array
        console.log(newArray[0])
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

   



    if(range < 10) {
        name = "gif-l"
    } else if (range < 16) {
        name = "gif-m"
    } else {
        name = "gif-s"
    }  
   
 
    return (
        <div className="game">
            <div className="game-over">
            </div>            

            <Score
            score={score.score}
            highScore={score.highScore}
            range={range}
            ></Score>
           {array.map((gif, index) => {
                return(
                    <img key={index}  className={name} id={gif.id}  src={gif.images.original.url} onClick={(e) => inputEvent(e.target)} />
                )
            })}
        </div>
    )
};






export default StartGame;