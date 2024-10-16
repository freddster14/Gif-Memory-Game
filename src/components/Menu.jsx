import '../styles/Menu.css';

export default function Menu({ setDifficulty, setRange, range }) {

    function setDifficult (set) {
        const difficultP = document.querySelector('.difficulty').textContent
        const title = document.querySelector('.title')
        set(difficultP)
        document.querySelector('.title h2').style.display = "none"
        document.querySelector('.return-text').style.display = "block"
        title.style.position = "static"
        title.style.transform = "none"
    }

  
    return (
        <div className="main-menu">
            
            {range < 10
            ? <h2 className="difficulty">Easy</h2> 
            : range < 15 
            ? <h2 className="difficulty">Medium</h2> 
            : <h2 className="difficulty">Hard</h2> }
            <p className="range">Cards: {range}</p>
            <input 
            type="range" 
            min={4} 
            max={24} 
            value={range} 
            onChange={(e) => setRange(e.target.value)} 
            className="slider" 
            id="myRange"
            />
            <button onClick={() => setDifficult(setDifficulty)}>Start</button>
        </div>
    )
  
}








   
 