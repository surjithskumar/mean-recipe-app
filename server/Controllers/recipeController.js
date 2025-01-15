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