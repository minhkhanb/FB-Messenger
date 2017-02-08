var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(process.env.PORT || 7777);

console.log('server started at localhost:7777');