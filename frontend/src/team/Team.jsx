import React from "react";
import styles from "./Team.module.css";

const Team = ({team}) => {
    
    document.addEventListener("DOMContentLoaded", () => {
        displayPlayersA();
    })
    
    var displayPlayersA = async () => {
        var currTable = document.querySelector(".tableA tbody");
    
        try {
            var response = await fetch(`http://localhost:3000/players`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
    
            var playersList = await response.json();
            currTable.innerHTML = "";
            playersList.forEach(player => {
                var row = document.createElement("tr");
                row.innerHTML = `
                <td><span>${player.jno}</span></td>
                <td>${player.player}</td>
                <td>${player.score}</td>
                <td><input class="addPointsInput"/><button class="addPointsBtn">+</button></td>`
                currTable.appendChild(row);
            });
        }
        catch(err) {
            console.log(err);
        }
    }
    
    // /*---------------------------------------------------------*/
    
    
    var addPlayersToA = () => {
        var tableA = document.querySelector("#tableA tbody");
        var newRow = document.createElement("tr");
    
        newRow.innerHTML = `
            <td><input id="jnoInput"/></td>
            <td><input id="playerInput"/></td>
            <td></td> 
            <td><button id="confirmPlayerA">ADD</button></td>`
        // newRow.appendChild(newData3);
        tableA.appendChild(newRow);
    
        document.getElementById("confirmPlayerA").addEventListener('click', async function() {
            var jno = document.getElementsByClassName("jnoInput")[0].value;
            var player = document.getElementById("playerInput").value;
            var score = 0;// document.getElementById("scoreInput").value;
            var team = "A";
            // console.log(jno, player);
    
            try {
                var response = await fetch(`http://localhost:3000/players`, {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({team, jno, player, score})
                });
    
                var result = await response.json();
                if(result.success)
                    displayPlayersA();
                else
                    console.log(result.message);
            }
            catch(err) {
                console.log(err);
            }
        });
    };


    
    return (
        <div>
            <h2>Team {team}</h2>
            <button className={styles.addA} onClick={addPlayersToA}>+</button>
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
            </table>
        </div>
    )
};

export default Team;