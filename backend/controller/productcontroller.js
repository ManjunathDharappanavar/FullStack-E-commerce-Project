const productmodel = require("../model/productmodel");
const usermodel = require("../model/usermodel");

// http://localhost:4000/api/createproduct/<admin id>
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
        // checking if the userid is of admin
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

// http://localhost:4000/api/getproducts
const getproducts = async(req, res)=>{
    try{
        let products = await productmodel.find()
        return res.status(200).json({message: 'product fetched successfully', products:products})
    }catch(error){
        return res.status(500).json({error: 'iternal server error'})
    }
}

// http://localhost:4000/api/getproductbyid/<id>
const getproductbyid = async(req, res)=>{
    try{
        let id = req.params.id;
        if(!id){
            return res.status(400).json({error: 'id is required'})
        }

        // trying to get product from db
        const product = await productmodel.findById(id);
        if(!product){
            return res.status(404).json({error: 'product not found'})
        }
        return res.status(200).json({message: 'products successfully fetched', product:product})

    }catch(error){
        return res.status(500).json({error: 'internal server error'})
    }
}

const updateproduct = async(req, res)=>{
    try{
        // getting id to update product
        const id = req.params.id;
        if(!id){
            return res.status(400).json({error: 'id is required'})
        }

        const product = await productmodel.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(400).json({error: 'product does not exist'})
        }
        return res.status(200).json({message: 'product updated successfully', product:product})

    }catch(error){
        return res.status(500).json({error: 'internal server error'})
    }
}

const deleteproduct = async(req, res)=>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(400).json({error: 'id is required'})
        }
        const deletedproduct = await productmodel.findByIdAndDelete(id);
        if(!deletedproduct){
            return res.status(404).json({error: 'product delete failed'})
        }
        return res.status(200).json({message: 'product deleted successfully'})
    }catch(error){
        return res.status(500).json({error: 'internal server error'})
    }
}
module.exports={createproduct, getproducts, getproductbyid, updateproduct, deleteproduct}