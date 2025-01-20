const testimonials = require('../Model/testimonySchema')

//addTestimony

exports.submitTestimonyController = async(req,res) => {
    console.log("Inside add testimony function");
    const {name,email,message}=req.body

    try {
        const newTestimony = new testimonials({
            name,email,message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)

    } catch (error) {
        res.status(401).json(error)
    }
}