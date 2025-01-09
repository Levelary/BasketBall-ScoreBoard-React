const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bharath",
    database: "scoreDB2"
});

db.connect((err) => {
    if(err)
        console.log("Database connection unsuccessful, Error:", err);
    else
        console.log("Database connected successfully");
})
// app.use(express.static("public"));

// app.get('/',(req, res) => {
//     // res.sendFile(path.join(__dirname,'public/signup','signup.html'));
//     res.redirect('signup/signup.html');
// });

app.post("/signup", async (req, res) => {

    let {username, email, password} = req.body;
    console.log(username, email, password);
    let type = "user";
    let query = `INSERT INTO users VALUES(?, ?, ?, ?)`;

    db.query(query, [username, email, password, type], (err, result) => {
        if(err)
        {
            res.status(500).json({success:false, message:err.message});
            return;
        }
        else
            res.status(200).json({success:true, message: "Signup successful"});
    })
})
app.post("/login", async (req, res) => {

    let {username, email, password} = req.body;
    console.log(username, email, password);
    let query = "SELECT * FROM users WHERE username=?";

    db.query(query, [username], (err, result) => {
        if(err)
        {
            res.status(500).json({success:false, message:err.message});
            return;
        }

        if(result.length === 0)
        {
            res.status(401).json({success:false, message:"User not found"});
            return;
        }
        var user = result[0];
        
        console.log("user:", user);
        if(user.email !== email || user.password !== password)
        {
            res.status(404).json({success:false, message:"Invalid credentials"});
            return;
        }

        res.status(200).json({success:true, message: "Login successful", type:user.type});

    });
});

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});