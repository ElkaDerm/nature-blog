const jwtUtils= require('../utils/jwt.js');
const {AUTH_TOKEN_NAME, JWT_SECRET}= require('../constans.js');


exports.authMidl=function (req,res,next) {


    let loginToken= req.cookies[AUTH_TOKEN_NAME];
 
    if (loginToken) {
    
     jwtUtils.verify(loginToken, JWT_SECRET).then(decodedToken =>{
         
         req.user= decodedToken;
         
         res.locals.user=decodedToken;
         next();

     }).catch (err =>{
         res.clearCookie(AUTH_TOKEN_NAME)
        
        res.redirect('/login')
     })
    }else {
        next()
    }
}
