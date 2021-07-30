const mongoose = require('mongoose');

const enquireSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Enquire = mongoose.model('Enquire', enquireSchema);

module.exports = Enquire;