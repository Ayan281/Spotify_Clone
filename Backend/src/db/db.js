const { log } = require("console");
const mongoose = require("mongoose");

async function conectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to Database");
    
}
module.exports = conectDB;