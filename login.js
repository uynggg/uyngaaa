var mysql = require('mysql');
// const express = require('express');
// const session = require('express-session');
// const path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '12345',
	// database : 'nodelogin'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE nodelogin", function (err) {
      if (err) throw err;
      console.log("Database created");
    });
  });

  const createQuery = "CREATE TABLE accounts (id INT(50), username VARCHAR (50), password VARCHAR(20), email VARCHAR(50))";
  connection.query(createQuery, function(error){
if (error)
console.log("table uussengu");
else
console.log("table uussen");
  });

// CREATE TABLE IF NOT EXISTS `accounts` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `username` varchar(50) NOT NULL,
//   `password` varchar(255) NOT NULL,
//   `email` varchar(100) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

// INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

// const app = express();