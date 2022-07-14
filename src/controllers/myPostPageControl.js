const router = require("express").Router({ mergeParams: true });
const postService= require('../service/postSerevice.js')
const {isUser}=require('../midlleware/gards.js')

router.get("/myPosts",isUser, async (req, res) => {

  let posts = await postService.getAllmyPost(req.user._id);

  res.render("my-posts", {posts} );
});

module.exports = router;
