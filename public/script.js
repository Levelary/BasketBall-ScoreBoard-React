// var displayTable = (tableId) => {
//     var currTable = document.getElementById("tableId");

//     teamA.forEach(player => {
//         var row = document.createElement("tr");
//         row.innerHTML = `
//         <td><input id="jnoInput"/></td>
//         <td><input id="playerInput"/></td>
//         <td><input id="scoreInput"/></td>
//         <td><button id="addPlayer">ADD</button></td>`
//         currTable.appendChild(row);
//     })
// }


/*---------------------------------------------------------*/

document.getElementById("logout").addEventListener('click', function(){ 
    window.location.href = "./login/login.html";
})
var addPlayer = document.getElementsByClassName("addPlayer");


document.getElementById("addA").addEventListener('click', function() {
    var tableA = document.querySelector("#tableA tbody");

    var newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td><input id="jnoInput"/></td>
        <td><input id="playerInput"/></td>
        <td><input id="scoreInput"/></td>
        <td><button id="confirmPlayerA">ADD</button></td>
        </form>`
    // newRow.appendChild(newData3);
    tableA.appendChild(newRow);
});
document.getElementById("confirmPlayerA").addEventListener('click', function() {
    var input1 = document.getElementById("jnoInput").textContent;
    var input2 = document.getElementById("playerInput").textContent;
    var input3 = document.getElementById("scoreInput").textContent;

    var newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${input1}</td>
        <td>${input2}</td>
        <td>${input3}</td>`
    // displayTable("tableA");
    tableA.appendChild(newRow);
})

document.getElementById("addB").addEventListener('click', function() {
    var tableB = document.querySelector("#tableB tbody");

    var newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td><input id="jnoInput"/></td>
        <td><input id="playerInput"/></td>
        <td><input id="scoreInput"/></td>
        <td><button id="confirmPlayerB">ADD</button></td>
        </form>`
    tableB.appendChild(newRow);
});
document.getElementById("confirmPlayerB").addEventListener('click', function() {
    var input1 = document.getElementById("jnoInput").textContent;
    var input2 = document.getElementById("playerInput").textContent;
    var input3 = document.getElementById("scoreInput").textContent;

    var newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${input1}</td>
        <td>${input2}</td>
        <td>${input3}</td>`
    // displayTable("tableB");
    tableB.appendChild(newRow);
})