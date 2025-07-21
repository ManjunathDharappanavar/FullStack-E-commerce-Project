const express = require('express');
const router = express.Router();
const {createproduct, getproducts, getproductbyid} = require('../controller/productcontroller');

router.post('/createproduct/:userid', createproduct)
router.get('/product',getproducts)
router.get('/getproductbyid/:id', getproductbyid)
module.exports=router;