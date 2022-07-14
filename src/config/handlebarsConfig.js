const handlebars= require('express-handlebars');
const path= require('path')

function hbsInit (app) {
app.engine('hbs',handlebars({
    extname:'hbs'
}));

//set views path:
app.set('views',path.resolve(__dirname,'../views'))

app.set('view engine', 'hbs')

}

module.exports=hbsInit