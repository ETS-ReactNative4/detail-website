const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const {
    SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    SESSION_SECRET,
    CONNECTION_STRING
} = process.env

const app = express();
app.use( bodyParser.json() );
massive( CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => { console.log(`I can throw a pigskin a quarter mile. Port: ${SERVER_PORT}`)})