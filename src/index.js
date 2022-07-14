const express= require('express');
const hbsInit= require('./config/handlebarsConfig.js')
const expressSettings=require('./config/expressConfig.js')
const routs= require('./config/router.js')
const {PORT}=require('./constans.js')
const initDB=require('./config/databaseConfig.js')
const {authMidl} = require('./midlleware/authMiddleware.js')


const app= express();



expressSettings(app);
hbsInit(app);

app.use(routs);



initDB()
.then(()=>{

     app.listen(PORT, ()=> console.log (`Application is running on http://localhost:${PORT} ! DB is connected..`))
})
.catch(error => console.log ('Data base is NOT connected...', error)) 

