import React from "react";
import styles from "./Sets.module.css";
const Sets = () => {
    document.addEventListener('DOMContentLoaded', () => {
        displaySets();
    });
    async function displaySets() {
        // event.preventDefault();

        var setsTable = document.querySelector(".setsTable tbody");
        try {
            var response = await fetch('/sets', {
                method: 'GET',
                headers: {'Content-Type':'application/json'}
            });
                
            var sets = await response.json();
            // console.log(sets);

            setsTable.innerHTML = "";
            sets.forEach(set => {
                var newRow = document.createElement("tr");
                newRow.innerHTML = `
                    <td>${set.setNo}</td>
                    <td>${set.winner}</td>
                    <td>${set.scoreA} : ${set.scoreB}</td>`

                setsTable.appendChild(newRow);
            });
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <table className={styles.setsTable}>
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
            </table>
        </div>
    )
};

export default Sets;