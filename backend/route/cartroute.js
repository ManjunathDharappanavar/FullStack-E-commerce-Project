const express = require('express');
const router =  express.Router();
const {addtocart, getcartofuser, updatecart, deletecart} = require('../controller/cartcontroller');


// endpoints
router.post('/addtocart/:userid/:productid/:quantity', addtocart)
router.get('/getcartofuser/:userid', getcartofuser)
router.patch('/updatecart/:cartid/:quantity', updatecart)
router.delete('/deletecart/:cartid', deletecart)
module.exports=router
