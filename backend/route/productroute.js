const express = require('express');
const router = express.Router();
const {createproduct, getproducts} = require('../controller/productcontroller');

router.post('/createproduct/:userid', createproduct)
router.get('/product',getproducts)
module.exports=router;