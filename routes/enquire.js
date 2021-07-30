const router = require('express').Router();
const isLoggedIn = require('../middleware');
const Enquire = require('../models/enquire');

router.post('/enquire', async(req,res)=>{
    try {
        await Enquire.create(req.body);
        res.redirect('/');
    } catch (e) {
        console.log('Cannot send messages right now');
        req.flash('error', 'Cannot send messages right now!!');
        res.redirect('/error');
    }
})

router.get('/enquire', isLoggedIn, async(req,res)=>{
    try {
        const contacts = await Enquire.find({});
        let dates = [];
        for(let contact of contacts){
            const date = `${contact.createdAt.getDate()}-${contact.createdAt.getMonth()+1}-${contact.createdAt.getFullYear()}`;
            // console.log(date);
            dates.push(date);
    }
    res.render('enquire/index', {contacts, dates});
    } catch (e) {
        console.log('Cannot find this page');
        req.flash('error', 'Cannot find this page!!');
        res.redirect('/error');
    }
})

router.delete('/enquire/:id', isLoggedIn, async(req,res)=>{
    try {
        await Enquire.findByIdAndDelete(req.params.id);
        req.flash('success', 'Data successfully removed!');
        res.redirect('/enquire');
    } catch (e) {
        console.log('Cannot delete this message right now!!');
        req.flash('error', 'Cannot delete message right now!!');
        res.redirect('/error');
    }
})

module.exports = router;