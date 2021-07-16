const jwt = require('express-jwt');
require('dotenv').config();

let {
   SESSION_SECRET
} = process.env;

module.exports = jwt({
   secret: SESSION_SECRET,
   requestProperty: 'session', // this is where the next middleware can find the encoded data generated in services/auth:generateToken
   algorithms: ['HS256']
}).unless({path: ['/auth/login', '/auth/register','/api/forgotPassword/:EMAIL', '/api/resetPassword',  '*']});