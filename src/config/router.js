const router= require('express').Router();

const homePage=require('../controllers/homePageControl.js')
const createPageControl=require('../controllers/createPageControl.js')
const detailsPageControl=require('../controllers/detailsPageControl.js')
const editPageControl=require('../controllers/editPageControl.js')
const loginPageControl=require('../controllers/loginPageControl.js')
const registerPageControl=require('../controllers/registerPageControl.js')
const myPostPageControl= require('../controllers/myPostPageControl.js')
const allPostPageControl=require('../controllers/allPostsControl.js')



router.use(homePage)
router.use(createPageControl)
router.use('/details',detailsPageControl)
router.use(editPageControl)
router.use('/login',loginPageControl)
router.use(registerPageControl)
router.use(myPostPageControl)
router.use(allPostPageControl)



router.get('*', (req,res)=> {
    res.render('404')
})

module.exports=router