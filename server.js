var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/webhook', function(req, res) {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === 'optimus-chat-bot') {
        console.log("Validating webhook");
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);
    }
});

app.listen(process.env.PORT || 7777);

console.log('server started at localhost:7777');