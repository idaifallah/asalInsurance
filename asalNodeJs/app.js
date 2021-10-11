// setup the web server, run node app.js and access it on http://localhost:3000/

const http = require('http');
var mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 3001;

// those modules are necessary for reading excel files
const fs = require("fs");
const fastcsv = require("fast-csv");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});