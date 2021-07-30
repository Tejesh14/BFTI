const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');
const isLoggedIn = require('./middleware');


// Database
mongoose.connect('mongodb://localhost:27017/BFTI', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>{
    console.log('Database Connected :)');
})
.catch((err)=>{
    console.log(err.message);
})

// seedDB();

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Routes
const infoRoute = require('./routes/info');
const blogRoute = require('./routes/blog');
const authRoute = require('./routes/auth');
const enquireRoute = require('./routes/enquire');

// Set
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(methodOverride('_method'));

// Middlewares
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));

app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})

app.get('/',(req,res)=>{
    res.render('index');
})

app.use(infoRoute);
app.use(blogRoute);
app.use(authRoute);
app.use(enquireRoute);

app.listen(5000, ()=>console.log('Server is running at port 5000'));