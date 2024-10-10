
export default function Menu({ setDifficulty, setRange, range }) {

    return (
        <>
            <h1>Main Menu</h1>
            {range < 9
            ? <h2 className="difficulty">Easy</h2> 
            : range < 16 
            ? <h2 className="difficulty">Medium</h2> 
            : <h2 className="difficulty">Hard</h2> }
            <p>{range}</p>
            <input type="range" min={4} max={20} value={range} onChange={(e) => setRange(e.target.value)} className="slider" id="myRange"/>
            <button onClick={() => setDifficult(setDifficulty, range)}>Start</button>
        </>
    )
  
}


function setDifficult (set, range) {
    console.log(range)
    const difficultP = document.querySelector('.difficulty').textContent
    set(difficultP)
 
}





   
 