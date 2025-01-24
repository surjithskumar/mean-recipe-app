const express = require('express')
const recipeController = require('../Controllers/recipeController')
const testymonyController = require('../Controllers/testimonyController');
const jwtMiddleware = require('../Middleware/jwtMiddleware');
const downloadController = require('../Controllers/downloadController');

const router = new express.Router()

//getRecipes
router.get('/all-recipes',recipeController.getRecipeController);

//add Testiminy

router.post('/add-testimony',testymonyController.submitTestimonyController)

//register

router.post('/register',userController.registerController)

//login

router.post('/login',userController.loginController)

//get single recipe

router.get('/recipes/:id/view',jwtMiddleware,recipeController.getARecipeController)

//get related recipe

router.get('/related-recipe',jwtMiddleware,recipeController.getRelatedRecipe)

//download recipe

router.post('/recipe/:id/download',jwtMiddleware,downloadController.addDownloadController)

module.exports=router