var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var path = require('path');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database : 'log'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   con.query("CREATE DATABASE log", function (err, ) {
//     if (err) throw err;
//     console.log("Database created");
//   });
});


// var createQuery = "CREATE TABLE accounts (id INT(50), username VARCHAR (50), password VARCHAR(20), email VARCHAR(50))";
// con.query(createQuery, function(error){
// if (error)
// console.log("table uussengu");
// else
// console.log("table uussen");
// });
// var insertQuery = "INSERT INTO accounts (id, username,password,email) VALUES ('1', 'Uynggg','4562','uyngaa@gmail.com')";
// con.query(insertQuery, function (err) {
//     if (err)
//     console.log("insert amjiltgui");
//     else
//     console.log("insert amjilttai");
//     });

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});
// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		con.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});
app.listen(3000);