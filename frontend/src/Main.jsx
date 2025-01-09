import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Main.module.css';
const App = () => {
    // document.addEventListener("DOMContentLoaded", () => {
    //     displayPlayersA();
    // })
    
    // var displayPlayersA = async () => {
    //     var currTable = document.querySelector(".tableA tbody");
    
    //     try {
    //         var response = await fetch(`http://localhost:3000/players`, {
    //             method: "GET",
    //             headers: {"Content-Type": "application/json"},
    //         });
    
    //         var playersList = await response.json();
    //         currTable.innerHTML = "";
    //         playersList.forEach(player => {
    //             var row = document.createElement("tr");
    //             row.innerHTML = `
    //             <td>${player.jno}</td>
    //             <td>${player.player}</td>
    //             <td>${player.score}</td>
    //             <td><input class="addPointsInput"/><button class="addPointsBtn">+</button></td>` //<button id="addPlayer">ADD</button>
    //             currTable.appendChild(row);
    //         });
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    // }
    
    // /*---------------------------------------------------------*/
    
    // document.getElementById("logout").addEventListener('click', function(){ 
    //     window.location.href = "./login/login.html";
    // })
    // // var addPlayer = document.getElementsByClassName("addPlayer");
    
    
    // document.getElementById("addA").addEventListener('click', function() {
    //     var tableA = document.querySelector("#tableA tbody");
    
    //     var newRow = document.createElement("tr");
    
    //     newRow.innerHTML = `
    //         <td><input id="jnoInput"/></td>
    //         <td><input id="playerInput"/></td>
    //         <td></td> 
    //         <td><button id="confirmPlayerA">ADD</button></td>`
    //     // newRow.appendChild(newData3);
    //     tableA.appendChild(newRow);
    
    
    //     document.getElementById("confirmPlayerA").addEventListener('click', async function() {
    //         var jno = document.getElementsByClassName("jnoInput")[0].value;
    //         var player = document.getElementById("playerInput").value;
    //         var score = 0;// document.getElementById("scoreInput").value;
    //         var team = "A";
    //         // console.log(jno, player);
    
    //         try {
    //             var response = await fetch(`http://localhost:3000/players`, {
    //                 method: 'POST',
    //                 headers: {"Content-Type": "application/json"},
    //                 body: JSON.stringify({team, jno, player, score})
    //             });
    
    //             var result = await response.json();
    
    //             if(result.success)
    //                 displayPlayersA();
    //             else
    //                 console.log(result.message);
            
    //         }
    //         catch(err) {
    //             console.log(err);
    //         }
    
    //     });
    // });
    
    
    // document.getElementById("addB").addEventListener('click', function() {
    //     var tableB = document.querySelector("#tableB tbody");
    
    //     var newRow = document.createElement("tr");
    
    //     newRow.innerHTML = `
    //         <td><input id="jnoInput"/></td>
    //         <td><input id="playerInput"/></td>
    //         <td></td>
    //         <td><button id="confirmPlayerB">ADD</button></td>
    //         </form>`
    //     tableB.appendChild(newRow);
    
    
    //     document.getElementById("confirmPlayerB").addEventListener('click', async function() {
    //         var jno = document.getElementById("jnoInput").textContent;
    //         var player = document.getElementById("playerInput").textContent;
    //         var score = 0; //document.getElementById("scoreInput").textContent;
    //         var team = "B";
    
    //         // var newRow = document.createElement("tr");
    //         // newRow.innerHTML = `
    //         //     <td>${input1}</td>
    //         //     <td>${input2}</td>
    //         //     <td>${input3}</td>`
    //         // displayTable("tableB");
    //         // tableB.appendChild(newRow);
    //         try {
    //             var response = await fetch("http://localhost:3000/players", {
    //                 method: 'POST',
    //                 headers: {'Content-Type:': 'application/json'},
    //                 body: JSON.stringify({team, jno, player, score})
    //             });
    //             var result = await response.json();
    
    //             if(result.success)
    //                 displayPlayers(tableB);
    //             else
    //                 console.log(result.message);
    //         }
    //         catch(err) {
    //             console.log(err);
    //         }
    
    //     });
    // });
  return (
    <div className='mainBody'>
        <div>
            <h1 style={{color: "white"}}>Basketball Scoreboard</h1>  
            <button className={styles.logout}>Logout</button>
    
            <div className={styles.scoreBoard}>
                <div className={styles.timer}>
                    <div className={`${styles.minutes} ${styles.timeBox}`}>10</div>{/*  class="timeBox"  */}
                    <div className={styles.seconds}>00</div>{/*  class="timeBox" */}
                    <div className={styles.btns}>
                        <button className={styles.save}>Save the set</button>
                        <button className={styles.reset}>Reset</button>
                    </div>            
                </div>
                {/* <span style={{marginLeft: "20px",}}>Minutes</span>
                <span style={{marginLeft: "32px",}}>Seconds</span>  */}
                <br/>
                <button className={styles.pause}>Start</button>
                
            </div>
            <div>
                <span className={styles.boardA}></span>
                <span className={styles.boardB}></span>
            </div>
        </div>
        <br/><br/>
        
        <table className={styles.setTable}>
            <thead>
                <tr>
                    <th><span>Set No.</span></th>
                    <th><span>Winner</span></th>
                    <th>
                        <span>Scores (A:B)</span>
                    </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table><br/><br/>

        <h2>Team A</h2>
        <button className={styles.addA}>+</button>
        <table className={styles.tableA}>
            <thead>
                <tr>
                    <th><span>JNo.</span></th>
                    <th><span>Player</span></th>
                    <th><span>Score</span></th>
                    <th><span>Points</span></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table><br/><br/>

        <h2>Team B</h2>
        <button className={styles.addB}>+</button>
        <table className={styles.tableB}>
            <thead>
                <tr>
                    <th><span>JNo.</span></th>
                    <th><span>Player</span></th>
                    <th><span>Score</span></th>
                    <th><span>Points</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>19</td>
                    <td>Karthik</td>
                    <td>3</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>

  )};

export default App;
