const express = require('express')
const router = express.Router();
const {createorder, getallorders, getorderhistoryofuser, updateorder} = require('../controller/orderscontroller');


router.post('/createorder',createorder);
router.get('/getorders',getallorders)
router.get('/getuserorders/:userid',getorderhistoryofuser)
router.put('/updateorder/:id',updateorder)
module.exports=router