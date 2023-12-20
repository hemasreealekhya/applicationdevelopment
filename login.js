
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "students"
});

// connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database successfully!")
});


app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/login.html");
})

app.post("/", (req,res) =>{
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from student where username = ? and pass = ?",[username,password],function(error,results,fields){
        if (results.length > 0) {
            res.redirect("/welcome"); 
        } else {
            res.redirect("/");
        }
        res.end();
    })
})

// when login is success
app.get("/welcome",function(req,res){
    res.sendFile(__dirname + "/index.html")
})



// set app port 
app.listen(4000);

