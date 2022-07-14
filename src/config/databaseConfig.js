const mongoose=require('mongoose')
const{DB_CONNECTION_URL} =require('../constans.js')


 async function initDB () {
     mongoose.connect(DB_CONNECTION_URL);
}

module.exports=initDB