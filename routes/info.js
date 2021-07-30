const router = require('express').Router();

// Course Page
router.get('/courses',(req,res)=>{
    res.render('info/courses');
})

// Production Page
router.get('/production',(req,res)=>{
    res.render('info/production');
})

// Faculty Page
router.get('/faculties',(req,res)=>{
    res.render('info/faculties');
})

// Contact Page
router.get('/contact',(req,res)=>{
    res.render('info/contact');
})

module.exports = router;