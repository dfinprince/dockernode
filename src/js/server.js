'use strict'
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Router
var index = require('./routes/index');

// constants
const port = process.env.port || 8080;
const host = '0.0.0.0';

// Create app
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', index);

app.get('/', (req,res) => {
    let s = JSON.stringify(process.env, null, "\n");
    res.send('Hello World : ' + s);
});

app.listen(port, host, () => {
    // eslint-disable-next-line no-console
    console.log('listening ' + host + 'on : ' + port);
})
