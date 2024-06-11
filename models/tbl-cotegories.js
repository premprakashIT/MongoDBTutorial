const mongoose = require("mongoose")

const schema  = mongoose.Schema({
    CategoryId:Number,
    CategoryName:String

})

module.exports = mongoose.model("tblCategories",schema)