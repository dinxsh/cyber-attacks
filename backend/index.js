const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()

app.use('/', express.static(path.join(__dirname, '../frontend/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
})

app.post('/login', urlencodedParser, (req, res) => {
    res.send({ username: req.body.email, password: req.body.password })
});

module.exports = app;