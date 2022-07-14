const User = require('../models/User.js');
const {JWT_SECRET, SALT_ROUNDS}=require('../constans.js');
const jwtUtils=require('../utils/jwt.js');
const bcrypt= require('bcrypt');



 async function register({nameFirst, nameSecond, email, password}) {
  
     const hash= await bcrypt.hash(password, SALT_ROUNDS)
       
     let newUser= new User({nameFirst,nameSecond, email, password:hash})


         await  newUser.save();

}

async function login(email, password) {
    
    
    let user = await User.findOne({email}).lean()
    
    
    let hashedPass= user.password
    

    if (!user) {
        throw new Error('Password or username invalid!')
    };

    let isValid = await bcrypt.compare(password, hashedPass);


    if (!isValid) {
        throw new Error('Password or username invalid!')
    };

    let payload={
        _id: user._id,
        email: user.email,
        
    }

   let token= await jwtUtils.sign(payload, JWT_SECRET)

   return token;

}

module.exports = {
    register,
    login,
}