const express = require('express');
const session = require('express-session');
const axios = require('axios');
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

massive( CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}) );

app.get('/auth/callback', async (req, res) => {
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    const db = req.app.get('db');
    let {sub, email, name, picture} = resWithUserData.data;
    let foundUser = await db.find_user([sub]);

    if(foundUser[0]){
        req.session.user = foundUser[0];
        res.redirect('/#/private')
    }
})

app.get('/api/user-data', (req, res) => {
    if (req.session.user){
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('Smooth move ex lax!')
    }
})

app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000')
})

app.listen(SERVER_PORT, () => { console.log(`I can throw a pigskin a quarter mile. Port: ${SERVER_PORT}`)})