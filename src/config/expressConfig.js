const express= require('express');
const path=require('path');
const cookieParser= require('cookie-parser')
const {authMidl, isLogIn} = require('../midlleware/authMiddleware.js')



function expressSettings(app) {

    app.use('/static', express.static(path.resolve(__dirname,'../public')))

// set req.body parser:
    app.use (express.urlencoded({extended:true}));

    //set cookie-parser:
    app.use(cookieParser());
    app.use(authMidl)
    
}

module.exports=expressSettings