function Score({
    score,
    highScore,
    range,
}) {

    if(range === highScore){
        win()
    }

    function win() {
        
    }

    return (
        <div className="score-board">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    )

}

export default Score