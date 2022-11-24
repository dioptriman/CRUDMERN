//Dependencies
//Mongoose
const mongoose = require('mongoose');

//Schema
const User = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    
    email:{
        type : String,
        required : true
    },

    gender : {
        type : String,
        required : true
    },

    isAdmin : {
        type : Boolean,
        required : true,
        default : false 
    }
});

// Exporting the model
exports.User = mongoose.model('User', User)
