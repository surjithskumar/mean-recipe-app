const express = require('express')
const recipeController = require('../Controllers/recipeController')

const router = new express.Router()

//getRecipes
router.get('/all-recipes',recipeController.getRecipeController);

module.exports=router