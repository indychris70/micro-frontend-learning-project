var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan('short'));

var bootstrapPath = path.join(__dirname, 'bootstrap', 'static');
console.log("Bootstrap path: " + bootstrapPath);
app.use(express.static(bootstrapPath)); 

var welcomePath = path.join(__dirname, 'welcome', 'dist');
app.use('/mfe/welcome', express.static(welcomePath));

var musicPath = path.join(__dirname, 'music', 'build');
app.use('/mfe/music', express.static(musicPath));

app.use(function(req, res) {
    res.status(404);
    res.send("File not found!");
});

app.listen(3000, function() {
    console.log("App Started on port 3000");
});