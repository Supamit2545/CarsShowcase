const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json()); // Parse incoming JSON data
app.use(cors()); // Enable CORS if necessary

// Improved database connection with error handling
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user_tests"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        throw err; // Or handle connection errors gracefully
    }
    console.log('Connected to database');
});

// Improved login route using prepared statements
app.post('/signup', (req,res) =>{
  const sql = "INSERT INTO `users` (`username`, `email`, `password`) VALUES (?)";

  const values = [
    req.body.username,
    req.body.email,
    req.body.password
  ]
  db.query(sql,[values], (err, result)=>{
    if(err) return res.json({massage:"error in node"});
    return res.json(result);
  })
})
app.post('/login', (req, res) => {
  const email =  req.body.email;
  const password = req.body.password;
  db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email , password],
    (err, result) =>{
      if(err){
        req.setEncoding({err: err});
      }else{
      if(result.length > 0 ){
        res.send({message:"Logged In"});
      }else{
        res.send({message: "Login Failed"})
      }
      }
    }
  )
});

app.listen(3001, () => {
    console.log("Running on Port 3001");
});