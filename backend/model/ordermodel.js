const mongoose = require('mongoose');
const orderschema = mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId, ref:'users'},
    products:[{
        productid:{type:mongoose.Schema.Types.ObjectId, ref:'products'},
        quantity:{type:Number, required:true}
    }],
    totalamount:{type:Number, required:true},
    paymentmode:{type:String,enum:["cod", "online"], default:"cod"},
    status: {type:String, enum:["pending", "completed"], default:"pending"},
    orderdate: {type:Date, default:Date.now},
    deliverydate: {type:Date},
    iscancle: {type:Boolean, default:false},
    shippingaddress:{type:String, required:true},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})

module.exports=mongoose.model('orders', orderschema);