const productmodel = require("../model/productmodel");
const usermodel = require("../model/usermodel");
const cartmodel = require("../model/cartmodel");

// http://localhost:4000/api/addtocart/<userid>/<productid>/<quantity>
const addtocart = async (req, res)=>{
    try{
        const userid = req.params.userid;
        const productid = req.params.productid;
        const quantity = req.params.quantity || 1;
        if(!userid || !productid){
            return res.status(400).json({error: 'user id and product id required'})
        }

        // getting user and product from database
        let user = await usermodel.findById(userid);
        let product = await productmodel.findById(productid);

        if(!user){
            return res.status(400).json({error: 'user not exist'});
        }
        if(!product){
            return res.status(400).json({error: 'product not exist'})
        }

        const newcart = new cartmodel({userid, productid, quantity});
        await newcart.save();
        return res.status(200).json({message: 'cart created successfully', newcart:newcart})

    }catch(error){
        return res.status(500).json({error: 'internal server error'})
    }
}


// http://localhost:4000/api/getcartofuser/<userid>
const getcartofuser = async(req, res)=>{
    try{
        const userid = req.params.userid;
        // check if user sent user id or not
        if(!userid){
            return res.status(400).json({error: 'user id required'})
        }

        const user = await usermodel.findById(userid);
        // checking if user exist
        if(!user){
            return res.status(400).json({error: 'user not exist'})
        }


        const cart = await cartmodel.find({userid}).populate('userid', '-password').populate('productid')
        // if(!cart){
        //     return res.status(400).json({error: 'cart not exist'})
        // }
        return res.status(200).json({message: 'your cart fetched successfully', cart:cart})
    }catch(error){
        return res.status(500).json({error: 'internal server error'})
    }
}

const updatecart = async(req, res)=>{
    try{
        const cartid = req.params.cartid;
        const quantity = req.params.quantity || 1;
        if(!cartid){
            return res.status(400).json({error: 'cart id required'})
        }

        const updatedcart = await cartmodel.findByIdAndUpdate(cartid, {quantity})
        if(!updatedcart){
            return res.status(400).json({error: 'cart not updated'})
        }
        return res.status(200).json({message: 'cart updated successfully', updatecart:updatedcart})

    }catch(error){
        return res.status(500).json({error: 'internal server error'})
    }
}

const deletecart = async(req, res)=>{
    try{
        const cartid = req.params.cartid
        if(!cartid){
            return res.status(400).json({error: 'cart id required'})
        }
        const deletedcart = await cartmodel.findByIdAndDelete(cartid)
        if(!deletedcart){
            return res.status(400).json({error: 'cart not deleted'})
        }
        return res.status(200).json({message: 'cart deleted successfully', deletedcart:deletedcart})
    }catch(error){
        return res.status(500).json({error: 'internal server error'})
    }
}

module.exports={addtocart, getcartofuser, updatecart, deletecart}