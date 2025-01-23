const recipes = require('../Model/recipeSchema')

//getRecipe controller
exports.getRecipeController=async(req,res)=>{
    console.log("Inside get recipe controller function");

    try {
        const allRecipes = await recipes.find();
        res.status(200).json(allRecipes);
    } catch (error) {
        res.status(401).json(error)
    }
}

//get single RecipeController
exports.getARecipeController=async(req,res)=>{
    console.log('inside get single recipe function');
    const {id} = req.params

    try {
        const recipeDetails = await recipes.findById({_id:id})
        res.status(200).json(recipeDetails)
    } catch (error) {
        res.status(401).catch(error)
    }
}

//get related recipe
exports.getRelatedRecipe=async(req,res)=>{
    console.log("inside related recipe function");
    const cuisine = req.query.cuisine
    try {
        const relatedRecipe = await recipes.find({cuisine})
        res.status(200).json(relatedRecipe)        
    } catch (error) {
        res.status(401).json(error)
    }
}