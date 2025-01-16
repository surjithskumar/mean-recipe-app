const mongoose = require('mongoose')

const testmonySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"pending"
    },
})

const testimonials = mongoose.model("testimonials",testmonySchema);
module.exports=testimonials;