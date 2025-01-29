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

//get testimoney

exports.getatestimonials = async(req,res) => {
    console.log("Inside get testimoney function");
    try {
        const allTestimonials = await testimonials.find()
        res.status(200).json(allTestimonials)
    } catch (error) {
        res.status(401).json(err)
    }
}

//update testimony

exports.updateTestmony = async(req,res) => {
    console.log("Inside update testimony function");

    const {id} = req.params
    const status = req.query.status
    try {
        const existingTestimony = await testimonials.findById({_id:id})
        existingTestimony.status = status
        existingTestimony.save()
        res.status(200).json(existingTestimony)
    } catch (error) {
        res.status(401).json(error)
    }

    //get Approved Testimony controller

    exports.getApprovedTestimonyController = async(req,res) => {
        console.log("Inside all approved testimonials");

        try {
            const approvedTestimonials = await testimonials.find({status:'Approved'})
            res.status(200).json(approvedTestimonials)
        } catch (error) {
            res.status(401).json(error)
        }

    }
}