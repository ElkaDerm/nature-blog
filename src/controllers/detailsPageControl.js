const router = require('express').Router({ mergeParams: true });
const postService = require('../service/postSerevice.js')
const { isUser } = require('../midlleware/gards.js')




router.get('/:postId', async (req, res) => {

    let onePost = await postService.getOne(req.params.postId);
    
    let onePostObj = await onePost.toObject();
    
    let votesEmails = onePostObj.postVotes.map(x => x.email).join(', ')

    let rating = onePostObj.rating

    let author = await postService.author(req.params.postId)


    if (req.user) {

        let isOwner = onePostObj.owner._id == req.user._id;

        let isVoted = onePost.postVotes.some(x => x._id == req.user._id);

        res.render('details', { ...onePostObj, author, isOwner, rating, isVoted, votesEmails })
    } else {

        res.render('details', { ...onePostObj, author, isOwner: undefined, votesEmails, rating, isVoted: undefined })
    }


})

router.get('/delete/:postId', isUser, async (req, res) => {

    await postService.remove(req.params.postId);

    res.redirect('/')

})

router.get('/:postId/voteUp', isUser, async (req, res) => {
    let postId = req.params.postId;
    let user = req.user._id;

    await postService.addVotesUp(postId, user)


    res.redirect(`/details/${postId}`)
});

router.get('/:postId/voteDown', isUser, async (req, res) => {
    let postId = req.params.postId;
    let user = req.user._id;

    await postService.addVotesDown(postId, user)


    res.redirect(`/details/${postId}`)
});





module.exports = router