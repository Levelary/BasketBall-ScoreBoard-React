import React from "react";
import styles from "./Timer.module.css";
// import Sets from "./sets/Sets.jsx";

const Timer = () => {


    const pauseBtn = document.getElementById('pause');
    let paused = 1;
    function handleStart() {
        if(pauseBtn.textContent === "Start")
        {
            // clearInterval(timerCount);
            startTimer();
        }
        if(pauseBtn.textContent === "Pause")
        {
            paused = 1;
            pauseBtn.textContent = "Resume";
        }
        else
        {
            paused = 0;
            pauseBtn.textContent = "Pause";
        }
    }

    async function handleSave(event) {
        event.preventDefault();

        try{
            let winner = "A", scoreA = 10, scoreB = 9;
            var response = await fetch('http://localhost:3000/sets', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({winner, scoreA, scoreB})
            });


            var result = await response.json();

            // console.log(result);
            if(result.success)
            {
                handleReset();
                // displaySets();
                // <Sets /> ///////////////////////////////////////////////////////////////
            }
            else    
                console.log(result.message);
        }
        catch(err){
            console.log(err);
        }
    }
    function handleReset() {
        pauseBtn.textContent = "Start";
        document.getElementById("minutes").textContent = String(10).padStart(2,0);
        document.getElementById("seconds").textContent = String(0).padStart(2,0);
        paused = 1;
        clearInterval(timerCount);
    }

    var timerCount;
    function startTimer() {
        let minutes = document.getElementById("minutes").textContent;
        let seconds = parseInt(document.getElementById("seconds").textContent, 10);
        timerCount = setInterval(function() {
            if(minutes <= 0)
                timerCount = null;
            if(!paused)
            {
                if(seconds > 0)
                    seconds--;
                else
                {
                    minutes--;
                    seconds = 59;
                }
                document.getElementById("minutes").textContent = minutes;
                document.getElementById("seconds").textContent = seconds;
            }
        }, 1000);
    }

    return (
        <div className={styles.scoreBoard}>
            <div className={styles.timer}>
                <div className='timeBox' id='minutes'>10</div> {/* className={`${styles.timeBox} ${styles.minutes}`} */}
                <div className='timeBox' id='seconds'>00</div>
                <div className={styles.btns}>
                    <button className='btns' id='save' onClick={handleSave}>Save the set</button>
                    <button className='btns' id='reset' onClick={handleReset}>Reset</button>
                </div>            
            </div>
            <br/>
            <button className='btns' id='pause' onClick={handleStart}>Start</button>
        </div>
    )
};

export default Timer;