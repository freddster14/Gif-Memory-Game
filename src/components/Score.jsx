import '../styles/Score.css'

function Score({
    score,
    highScore,
    range,
    setScore,
}) {

    if(range === highScore){
        document.querySelector('.win-screen').style.display = "flex"
    }

    function tryAgain() {
        document.querySelector('.win-screen').style.display = "none"
        setScore({score: 0, highScore:0})
    }
    
    return (
        <>
            <div className="win-screen">
                <h1>You did it!</h1>
                <p>You memorized all {range} cards!</p>
                <div>
                    <button onClick={tryAgain}>Try Again</button>
                    <button onClick={() => document.querySelector('.title').click()}>Main Menu</button>
                </div>
            </div>
            <div className="score-board">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
        </>
    )

}

export default Score