require("dotenv").config();
const app = require("./src/app")
const conectDB = require('./src/db/db');


conectDB();
app.listen(5000 , ()=>{
    console.log("Started server Successfully...");
    
})