const savedRecipes = require('../Model/saveRecipeSchema');

//addSavedRecipeController

exports.addSaveRecipeContoller = async(req,res) => {
    console.log("Inside saved recipe funstion");
    const {id} = req.params
    const userId = req.payload
    const {name,image} = req.body

    try {
        const existingRecipe = await savedRecipes.findOne({recipeId:id,userId})
        if(existingRecipe){
            res.status(406).json("Recipe already in the saved Recipe")
        }else{
            const newRecipe = new savedRecipes({
                recipeId:id,name,image,userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    } catch (error) {
        res.status(401).json(error);
    }
}

//getsavedRecipes

exports.getSavedRecipes = async(req,res) => {
    console.log("Get saved recipe function");
    const userId = req.payload

    try {
        const recipeCollection = await savedRecipes.find({userId})
        res.status(200).json(recipeCollection);
    } catch (error) {
        res.status(401).json(error);
    }
}

//remove saved recipe

exports.removeSavedRecipe = async(req,res) => {
    console.log("Inside remove recipe function");

    const {id} = req.params

    try {
        const removeRecipe = await savedRecipes.findByIdAndDelete({_id:id})
        res.status(200).json(removeRecipe);
    } catch (error) {
        res.status(401).json(error)
    }
}