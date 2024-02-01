const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    message:{
        type:String
    }
})

const contactModel = mongoose.model('user',ContactSchema);
module.exports = contactModel;