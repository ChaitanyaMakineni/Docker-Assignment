const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// // Variable to be sent to Frontend with Database status
// let databaseConnection = "Waiting for Database response...";
// router.get("/", function(req, res, next) {
//     res.send(databaseConnection);
// });
// // Connecting to MongoDB
// mongoose.connect("mongodb://localhost:27017/test");
// // If there is a connection error send an error message
// mongoose.connection.on("error", error => {
//     console.log("Database connection error:", error);
//     databaseConnection = "Error connecting to Database";
// });
// // If connected to MongoDB send a success message
// mongoose.connection.once("open", () => {
//     console.log("Connected to Database!");
//     databaseConnection = "Connected to Database";
// });


var mysql = require('mysql');
let databaseConnection = "Waiting for Database response...";

router.get("/", function(req, res, next) {
    res.send(databaseConnection);
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin"
});

con.connect(function(err) {
  if (err){
    databaseConnection = "Error connecting to Database";
    console.log("Database connection error:", err);
  }
    console.log("Connected to Database!");
    databaseConnection = "Connected to Database";
});


module.exports = router;