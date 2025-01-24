const downloads = require('../Model/downloadSchema')

//add Download controller

exports.addDownloadController = async(req,res) => {
    console.log("inside download function");
    const {id} = req.params
    const userId = req.payload
    const {name,image,cuisine} = req.body

    try {
        const existingRecipe = await downloads.findOne({recipeId:id})
        if(existingRecipe){
            existingRecipe.count+=1
            existingRecipe.save()
            res.status(200).json(existingRecipe)
        }else{
            const newRecipe = new downloads({
                recipeId:id,recipeName:name,recipeImage:image,cuisine,count:1,userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe);
        }
    } catch (error) {
        res.status(401).json(error)
    }
}