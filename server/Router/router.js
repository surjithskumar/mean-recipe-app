const express = require('express')
const recipeController = require('../Controllers/recipeController')
const testymonyController = require('../Controllers/testimonyController');
const jwtMiddleware = require('../Middleware/jwtMiddleware');
const downloadController = require('../Controllers/downloadController');
const savedRecipes = require('../Controllers/savedRecipeController');

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

//save recipe

router.post('/recipe/:id/save',jwtMiddleware,savedRecipeController.addSavedRecipeController)

//get saved Recipe
router.post('/saved-recipe',jwtMiddleware,savedRecipeController.getSavedRecipes)

//get testimoney
router.get('/all-testimonials',jwtMiddleware,testymonyController.getTestimonials)

//get update testimony
router.get('/testmonials/:id/update',jwtMiddleware,testymonyController.updateTestimony)

//get approved testimony
router.get('/all-approved-testimonials',jwtMiddleware,testymonyController.getApprovedTestimonyController)

//get all downloads
router.get('/all-downloads',jwtMiddleware,downloadController.getAllDownloadList)

//get all users
router.get('/all-users',jwtMiddleware,userController.getAllUserController)

//add recipe
router.post('/all-recipe',jwtMiddleware,recipeController.addRecipeController)

//remove saved Recipe
router.delete('/saved-recipe/:id/remove',jwtMiddleware,savedRecipeController.removeSavedRecipe)

module.exports=router