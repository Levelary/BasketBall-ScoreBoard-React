let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let saveSetBtn = document.getElementById("save");
let timerCount;
let paused = 1;
pauseBtn.addEventListener('click', function() {
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
});

resetBtn.addEventListener('click', function() {
    pauseBtn.textContent = "Start";
    document.getElementById("minutes").textContent = String(10).padStart(2,0);
    document.getElementById("seconds").textContent = String(0).padStart(2,0);
    paused = 1;
    clearInterval(timerCount);
});


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

var setId = 1;
saveSetBtn.addEventListener('click', function() {
    var setTable = document.querySelector("#setTable tbody");
    var newRow = document.createElement("tr")
        
    newRow.innerHTML = `
        <td><span>${setId}</span></td>
        <td><span>Team A</span></td>
        <td><span>10 : 5</span></td>`

    setId++;
    setTable.appendChild(newRow);
});