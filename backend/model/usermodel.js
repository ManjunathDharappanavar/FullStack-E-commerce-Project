// import module
// create schema
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    contact:{type:Number},
    password:{type:String, required:true},
    isAdmin:{type:Boolean},
    isblocked:{type:Boolean, default:false},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})
module.exports=mongoose.model('users', userSchema);
