
require("./database")
const TableModel = require("./models/tbl-cotegories")
const express = require("express")
const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
  TableModel.find().then((data)=>{
    res.json({message:"All started",data})
  })
})

app.get("/save-data",(req,res)=>{
  new  TableModel({CategoryId:5,CategoryName:"pizza"}).save().then(data=>{
    res.json({data})
   })
  
})

app.listen(3000,()=>console.log("server started"))