const router= require('express').Router({mergeParams:true});
const postService= require('../service/postSerevice.js')
const {isUser}=require('../midlleware/gards.js')
const {getFirstError}= require('../utils/errorHandler.js')

 async function createPost(req, res) {
   try {
    const {title,keyword,location,dateCreated,image,description} =req.body;

   let createdPost= await postService.create({...req.body, owner:req.user._id}, req.user._id);

    res.redirect('/allposts')

   }catch (error) {
    
       res.render('create', {error:getFirstError(error)})
   }

}

router.get('/create',isUser, (req, res)=>{
    res.render('create')
})
router.post('/create',createPost)


module.exports=router