const express = require('express');
const jsondb = require('simple-json-db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.json());

app.use(express.static('./www'));

app.use('/', require('./routers/mainRouter'));

//brb
//yeeeeehaaaaww

module.exports = app;
