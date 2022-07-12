const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
    email:{
        type:String,
        unique:true,
        trim:true,
        minlength:3,
        required:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    }
});

module.exports = mongoose.model('users',userSchema);