const users = require('../Model/userSchema');
const bCrypt = require('bcrypt')

//addUser

exports.registerController = async(req,res) => {
    console.log("Inside register function");

    const {username,email,password} = req.body

    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("user already exists");
        } else {
            const encryptedPassword = await bCrypt.hash(password,10)

            const newUser = new users({
                username,email,password:encryptedPassword,profilePic:''
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}