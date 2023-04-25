const mongoose = require("mongoose");


const User = mongoose.model('User', new mongoose.Schema({

    firstName:{
        type: String,
       
    },
    lastName:{
        type: String,
       
    },
    email:{
        type: String,
        
    },
    phone:{
        type: String,
       
    }
         
}));



exports.User = User;

