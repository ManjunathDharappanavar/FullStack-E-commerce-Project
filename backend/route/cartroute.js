const express = require('express');
const router =  express.Router();
const {addtocart, getcartofuser} = require('../controller/cartcontroller');

router.post('/addtocart/:userid/:productid/:quantity', addtocart)
router.get('/getcartofuser/:userid', getcartofuser)
module.exports=router
