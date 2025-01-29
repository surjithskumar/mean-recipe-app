const users = require('../Model/userSchema');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

//login

exports.loginController = async(req,res) => {
    console.log("inside login function");

    const {email,password} = req.body

    try {
        const existingUser = await users.findOne({email})

        if(existingUser){
            let isMatch = await bCrypt.compare(password,existingUser.password)

            if(isMatch||password==existingUser.password){
                const token = jwt.sign({userId:existingUser._id},process.env.jwt_secret);
                res.status(200).json({existingUser,token})
            }else{
                res.status(404).json("invalid email/password");
            }
        }else{
            res.status(404).json("invalid user");
        }
    } catch (error) {
        res.status(401).json(error);
    }
}

//get all users

exports.getAllUserController = async(req,res) => {
    console.log("Inside all user function");

    try {
        const allUsers = await users.find().skip(1)
        res.status(401).json(allUsers)
    } catch (error) {
        res.status(401).json(error)
    }
}