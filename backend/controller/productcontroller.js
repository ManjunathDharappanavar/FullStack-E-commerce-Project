const productmodel = require("../model/productmodel");
const usermodel = require("../model/usermodel");

const createproduct = async(req,res)=>{
    try{
        const userid = req.params.userid;
        // reading data from req.body which user is sending
        const {productname, price, category, description, image, stock_available} = req.body;
        if(!productname|| !price|| !category|| !description|| !image|| !stock_available){
            return res.status(400).json({error: 'productname, price, category, description, image, stock_available are required'})
        }

        let user = await usermodel.findById(userid);
        if(!user){
            return res.status(400).json({error: 'user not found'})
        }

        if(user.isAdmin!==true){
            return res.status(400).json({error: 'user is not admin'})
        }

        // create an obj and save in db
        let newproduct = new productmodel(req.body);
        await newproduct.save();
        return res.status(200).json({message: 'product created successfully', product:newproduct})

    }catch(error){
        return res.status(500).json({error: 'internal server error'})
    }
}

const getproducts = async(req, res)=>{
    try{
        let products = await productmodel.find()
        return res.status(200).json({message: 'product fetched successfully', products:products})
    }catch(error){
        return res.status(500).json({error: 'iternal server error'})
    }
}

module.exports={createproduct, getproducts}