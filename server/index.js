const express = require('express');
const cors = require('cors');
let app = express();
var router = require('./routes.js');
let db = require('./database');
let PORT = 3000;


// middleware to parse incoming requests that have JSON payloads
app.use(express.json());

//built-in middleware function in Express. It serves static files
app.use(express.static(__dirname + '/../dist'));


// routes ALL incoming requests into our router file - check line 3!
app.use('/', router);



// Binds and listens for connections on the specified port
app.listen(PORT, function() {
  console.log(` listening on port 3000`);
});
