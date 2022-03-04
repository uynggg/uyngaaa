var http = require('http');
var mysql = require('mysql');

connectionDb = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '12345',
   database: 'test'
 })
connectionDb.connect(function(err){
  if(err)
    console.log('amjiltgui')
  else
    console.log('amjilttai')
})

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  
}).listen(8080);
