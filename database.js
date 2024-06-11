const mongoose = require("mongoose")



function dbConnect(){
    mongoose.connect("mongodb://localhost:27017/productDB").then(connection=>{
        console.log("database connection successfully.")
    }).catch(err=>{
        console.log(err)
    })
}
dbConnect()