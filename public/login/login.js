

var missingMsg = document.getElementById("missingMsg");
var invalidMsg = document.getElementById("invalidMsg");

document.getElementById("submitBtn").addEventListener('click', async function(event){
    event.preventDefault();

    missingMsg.style.display = "none";
    invalidMsg.style.display = "none";

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // console.log(username, email);

    if(!username || !email) {
        missingMsg.style.display = "block";
        missingMsg.textContent = "Enter the username or email to login";
        return;    
    }
    if(!password) {
        missingMsg.style.display = "block";
        missingMsg.textContent = "Enter the password to login";
        return;
    }

    var response = await fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, email, password})
    });

    var result = await response.json();

    if(result.type === "user")
        window.location.href = "../main.html";
    else if(result.type === "admin")
        window.location.href = "../main.html";
    else
        invalidMsg.style.display = "block";
});