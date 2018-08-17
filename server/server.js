const path = require('path');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const axios = require('axios');
const massive = require('massive');

const app = express();

const cars_controller = require('./controllers/cars_controller')

const {
    SERVER_PORT,
    LOCAL_HOST_URL,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    SESSION_SECRET,
    CONNECTION_STRING} = process.env;

    massive(CONNECTION_STRING).then(dbInstance => {app.set('db', dbInstance)
    
    // dbInstance.new_cars()
    //     .then(car => console.log(car))
    //     .catch(err => console.log(err))
    
    // dbInstance.get_cars()
    //     .then(car => console.log(car))
    //     .catch(err => console.log(err))
    
})

app.use( express.static( `${__dirname}/../build` ) );

app.use( bodyParser.json() );
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))


// ENDPOINTS

// cars_controller
app.post( '/api/car', cars_controller.create );
app.get( '/api/cars/:auth_id', cars_controller.getAll );
app.get( '/api/car/:id', cars_controller.getOne );
app.put( '/api/car/:id/:auth_id', cars_controller.update );
app.delete( '/api/car/:id', cars_controller.delete );
// cars_controller


// Auth0
app.get('/auth/callback', async (req, res) => {
    try{
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.PROTOCOL}://${req.headers.host}/auth/callback`
    }
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    const db = req.app.get('db');
    let {sub, email, name, picture} = resWithUserData.data;

    let foundUser = await db.users.find_user([sub]);
    if(foundUser[0]){
        //put on session
        req.session.user = foundUser[0]
        res.redirect('/#/private')  // the '/' stands for 'http://localhost:3000/' - so we're redirecting to the home page // this command sends a redirect command to the browser
    } else {
        //create user
        let createdUser = await db.users.create_user([name, email, sub, picture]);
        //put on session
        req.session.user = createdUser[0];
        res.redirect('/#/private');
    }
}catch(err){console.error(err)}
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
    res.redirect('/#/')
    //redirect
    // res.redirect(LOCAL_HOST_URL)
})
// Auth0

// Hosting
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });
// Hosting

app.listen(SERVER_PORT, () => {
    console.log(`I can throw a pigskin a quarter mile. Port: ${SERVER_PORT}`);
});