const express = require('express')
const router = express.Router();
const {createorder, getallorders, getorderhistoryofuser} = require('../controller/orderscontroller');


router.post('/createorder',createorder);
router.get('/getorders',getallorders)
router.get('/getuserorders/:userid',getorderhistoryofuser)
module.exports=router