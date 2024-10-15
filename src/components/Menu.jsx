import '../styles/Menu.css';

export default function Menu({ setDifficulty, setRange, range }) {

    function setDifficult (set, range) {
        console.log(range)
        const difficultP = document.querySelector('.difficulty').textContent
        set(difficultP)

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
            <button onClick={() => setDifficult(setDifficulty, range)}>Start</button>
        </div>
    )
  
}








   
 