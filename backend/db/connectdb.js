const mongoose = require('mongoose')

async function connect() {
    try{
        // await to stop until this task is complete
        // connecting mongoose database via schema's connection string
        await mongoose.connect('mongodb://localhost:27017/ecommerce');
        console.log('Database Connected');
    }catch(error){
        console.log('Error While Connecting to Database'); 
    }
}
module.exports = connect;