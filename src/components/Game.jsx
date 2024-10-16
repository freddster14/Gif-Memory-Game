import { useState, useEffect } from "react";
import '../styles/Game.css';



function StartGame({range, score, setScore}) {
    const [data, setData] = useState(false);
    const key = import.meta.env.VITE_API_KEY;
 
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${range}&offset=0&rating=g&bundle=messaging_non_clips`)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                console.log(response)
                throw new Error('Unable to load! Try again in the next hour.')
            })
            .then(json => setData(json))
            .catch(error => alert(error))
      }, [range, key]);
      //Waits for data to fetch
      if(!data) return;
      return (
        <>
           <Game
            range={range}
            data={data}
            score={score}
            setScore={setScore}
            />
           
        </>
      )

}



function Game({ range, data, score, setScore}) {
    const [load, setLoad] = useState(false)
    const [memory, setMemory] = useState([])
    const cards = shuffle(data.data)
    let name = null;
    let current = []

    //Mixes gifs
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
   
    //Keeps track gifs clicked and score
    function gifClickEvent(e) {
        if(memory.includes(e.id)) {
            setScore({...score, score: 0})
            setMemory([])
        } else {
            setScore({...score, score: score.score + 1})
            setMemory([...memory, e.id])
            if(score.score + 1 > score.highScore) {
                setScore({...score, highScore: score.score})
            }
        }
    }
    //Waits for all gifs to be loaded to display
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
                document.querySelector('.title').style.display = "block"
                document.querySelector('.score-board').style.display = "flex";
            }
        }
    }


    // GIF Class Name
    if(range < 10) {
        name = "gif gif-l"
    } else if (range < 15) {
        name = "gif gif-m"
    } else {
        name = "gif gif-s"
    }  
   
 
    return (
        <>
            <div className="loading-bar">
                <h1 className="loading-title">Loading...</h1>
                <div className="progress-bar progress">0</div>
            </div>
            <div className="game">
                
                <div className="card-container">
                    {cards.map((gif, index) => (
                        <img 
                        key={index}  
                        className={name} 
                        id={gif.id}  
                        src={gif.images.original.url} 
                        onClick={(e) => gifClickEvent(e.target)} 
                        onLoad={(e) => loaded(e)} 
                        />
                    ))}
                </div>
            </div>
        </>

    )
};






export default StartGame;