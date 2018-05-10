'use strict'
const express = require('express');

// constants
const port = process.env.port || 8080;
const host = '0.0.0.0';

// Create app
const app = express();
app.get('/', (req,res) => {
    let s = JSON.stringify(process.env, null, "\n");
    res.send('Hello World : ' + s);
});

app.listen(port, host, () => {
    // eslint-disable-next-line no-console
    console.log('listening ' + host + 'on : ' + port);
})
