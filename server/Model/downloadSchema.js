const mongoose = require('mongoose')
const recipes = require('./recipeSchema')

const downloadSchema = new mongoose.Schema({
    recipeName:{
        type:String,
        required:true
    },
    recipeName:{
        type:String,
        required:true
    },
    recipeImage:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    },
    count:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
})

const downloads = mongoose.model('downloads',downloadSchema)
module.exports=downloads