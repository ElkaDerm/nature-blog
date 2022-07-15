

const router= require('express').Router({mergeParams:true});
const postService= require('../service/postSerevice.js')
const {isUser}=require('../midlleware/gards.js')

router.get('/edit/:postId',isUser, async (req, res)=>{

    let onePost= await postService.getOnePost(req.params.postId)
    let onePostObj= onePost.toObject()
      
    res.render('edit', {...onePostObj})
})

router.post('/edit/:postId',isUser, async (req, res) => {

    let updatedPost= req.body
 
    await postService.updatePost(req.params.postId, updatedPost);
    
    res.redirect(`/details/${req.params.postId}`)
})


module.exports=router