const router= require('express').Router({mergeParams:true});
const postSerevice=require('../service/postSerevice.js')


router.get('/', async (req, res)=>{

    res.render('home')
})


module.exports=router