import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Main.module.css';
import Timer from "./timer/Timer";
import Team from "./team/Team.jsx";
const Main = () => {
    

    
    
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
        
        <h1 style={{color: "white"}}>Basketball Scoreboard</h1>  
        <Link className={styles.button} id='logout' to='/login'>Logout</Link>
        
        <Timer/><br/><br/> 
        
        {/* <Sets/><br/><br/> */}

        <Team team='A'/><br/><br/>
        
        <Team team='B'/>
        {/* <h2>Team B</h2>
        <button className={styles.addB}>+</button> */}
        {/* <table className={styles.tableB}>
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
                    <td><span>19</span></td>
                    <td>Karthik</td>
                    <td>3</td>
                    <td></td>
                </tr>
            </tbody>
        </table> */}
    </div>

  )
};

export default Main;
