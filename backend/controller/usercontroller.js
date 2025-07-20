const usermodel = require('../model/usermodel')
const bcrypt = require('bcryptjs')

// user registration
// http://localhost:4000/api/register
const registeruser= async(req,res)=>{
    try{
        // let data = req.body;
        // we are reading data from req.body
        let {username, email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({error: 'username, password and email are required'})
        }

        let user = await usermodel.findOne({email});
        if(user){
            return res.status(400).json({error: 'user already exist'})
        }

        req.body.password=await bcrypt.hash(password, 10);
        let newuser = new usermodel(req.body);
        await newuser.save();
        res.status(200).json({message:"user registered successfully", user:newuser})

        // res.status(200).json({message:"API Under Construction", data})
    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
}

// user login
// http://localhost:4000/api/login
const login = async(req, res)=>{
    try{
        // getting email and password from req.body
        const {email, password} = req.body;
        // check if email and password entered/typed or not
        if(!email || !password){
            return res.status(400).json({error:'email and password required'})
        }

        // return user's email from mongodb and store in variable
        let user = await usermodel.findOne({email});
        // checking if user exist
        if(!user){
            return res.status(400).json({error: 'user not found!'})
        }

        // comparing password using bcrypt.compare because pass is hashed
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({error: 'password mismatch'})
        }

        res.status(200).json({message: "user logged in successfully", user:user})

    }catch(error){
        res.status(500).json({error:'Internal Server Error'})
    }
}

const getusers = async(req, res)=>{
    try{
        const users = await usermodel.find().select('-password');
        return res.status(200).json({message: "user fetched successfully", users:users})
    }catch(error){
        return res.status(500).json({error: 'internal server error'}, message.error)
    }
}
module.exports = {registeruser, login, getusers};