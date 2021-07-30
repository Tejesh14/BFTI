const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    img1:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    para1:{
        type: String,
        required: true
    },
    img2:{
        type: String,
        required: true
    },
    para2:{
        type: String,
        required: true
    },
    img3:{
        type: String,
        required: true
    },
    para3:{
        type: String,
        required: true
    },
    img4:{
        type: String,
        required: true
    },
    para4:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;