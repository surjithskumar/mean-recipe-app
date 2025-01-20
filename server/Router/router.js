const express = require('express')
const recipeController = require('../Controllers/recipeController')
const testymonyController = require('../Controllers/testimonyController')

const router = new express.Router()

//getRecipes
router.get('/all-recipes',recipeController.getRecipeController);

//add Testiminy

router.post('/add-testimony',testymonyController.submitTestimonyController)

module.exports=router