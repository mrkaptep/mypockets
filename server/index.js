require('dotenv').config();
const express = require('express');
const auth = require("./middleware/auth");
const path = require('path');
const mysql = require('mysql2/promise');
const fs = require('fs');

//CONTROLLERS
const authCtrl = require('./controllers/user');

//MIDDLEWARE
const app = express();

app.use(express.static('build'));
app.use(express.json({limit:'10mb'}));

let {
   SERVER_PORT,
   CONNECTION_STRING,
   DBusername,
   DBpassword,
   DatabaseName,
   Port,
   DBhost,
   CERT_CA_PATH,
   CERT_KEY_PATH,
   CERT_PATH, 
} = process.env;

//DATABASE CONNECTION

const pool = mysql.createPool({
   host: DBhost,
   user: DBusername,
   password: DBpassword,
   database: DatabaseName,
   port: Port,
   // ssl: {
   //    ca: fs.readFileSync(CERT_CA_PATH ),
   //    key: fs.readFileSync(CERT_KEY_PATH),
   //    cert: fs.readFileSync(CERT_PATH)
   // },
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0
});
global.pool = pool


//Auth Endpoints
app.post('/auth/register', auth, authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.post('/auth/logout', authCtrl.logout);

//Email Endpoints

// app.get('*', (req,res)=> { 
//    res.sendFile(path.join(__dirname, '../build/index.html')) 
// })

app.listen(SERVER_PORT, () => {
   console.log(`Listening on port: ${SERVER_PORT}`);
});