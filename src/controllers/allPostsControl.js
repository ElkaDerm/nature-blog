const router=require('express').Router();
const postSerevice=require('../service/postSerevice.js')

async function allPostPage(req, res) {
    
let all= await postSerevice.getAll()

    res.render('all-posts', {all})
}

router.get('/allposts',allPostPage);


module.exports=router