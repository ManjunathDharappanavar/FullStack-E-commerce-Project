const express = require('express');
const router = express.Router();
const {createproduct, getproducts, getproductbyid, updateproduct, deleteproduct} = require('../controller/productcontroller');

router.post('/createproduct/:userid', createproduct)
router.get('/product',getproducts)
router.get('/getproductbyid/:id', getproductbyid)
router.put('/updateproduct/:id',updateproduct)
router.delete('/deleteproduct/:id', deleteproduct)
module.exports=router;