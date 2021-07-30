const router = require('express').Router();
const isLoggedIn = require('../middleware');
const Blog = require('../models/blog');

// Get all blogs
router.get('/blogs',async(req,res)=>{
    try {
        const blog = await Blog.find({});
        res.render('blogs/index',{blog});
    } catch (e) {
        console.log('Cannot find blogs');
        req.flash('error', 'Cannot find blogs!!');
        res.redirect('/error');
    }
})

router.get('/blogs/new',isLoggedIn, (req,res)=>{
    try {
        res.render('blogs/new');
    } catch (e) {
        console.log('Cannot find this page');
        req.flash('error', 'Cannot find this page!!');
        res.redirect('/error');
    }
})

router.post('/blogs', isLoggedIn, async(req,res)=>{
    try {
        await Blog.create(req.body);
        req.flash('success', 'Blog created successfully');
        res.redirect('/blogs');
    } catch (e) {
        console.log('Cannot create this blog');
        req.flash('error', 'Cannot create this blog!!');
        res.redirect('/error');
    }
})

// view single blog
router.get('/blogs/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await Blog.findById(id);
        const date = `${data.createdAt.getDate()} / ${data.createdAt.getMonth()+1} / ${data.createdAt.getFullYear()}`;
        res.render('blogs/show',{data,date});
    } catch (e) {
        console.log('Cannot find this page');
        req.flash('error', 'Cannot find this page!!');
        res.redirect('/error');
    }
})

router.get('/blogs/:id/edit', isLoggedIn, async(req,res)=>{
    try {
        const data = await Blog.findById(req.params.id);
        res.render('blogs/edit',{data});
    } catch (e) {
        console.log('Cannot find this page');
        req.flash('error', 'Cannot find this page!!');
        res.redirect('/error');
    }
})

router.patch('/blogs/:id', isLoggedIn, async(req,res)=>{
    try {
        await Blog.findByIdAndUpdate(req.params.id,req.body);
        req.flash('success', 'Blog edited successfully');
        res.redirect(`/blogs/${req.params.id}`);
    } catch (e) {
        console.log('Cannot delete this blog');
        req.flash('error', 'Cannot edit this blog!!');
        res.redirect('/error');
    }
})

router.delete('/blogs/:id', isLoggedIn, async(req,res)=>{
    try {
        await Blog.findByIdAndDelete(req.params.id);
        req.flash('success', 'Blog deleted successfully');
        res.redirect('/blogs');
    } catch (e) {
        console.log('Cannot delete this blog');
        req.flash('error', 'Cannot delete this blog!!');
        res.redirect('/error');
    }
})

router.get('/error',(req,res)=>{
    res.render('error');
})

module.exports = router;