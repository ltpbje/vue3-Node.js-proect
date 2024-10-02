const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductType = {
    title: String,
    introduction: String,
    detail: String,
    cover: String,//封面
    editTime: Date,
    username:String
}

const ProductModel = mongoose.model('product', new Schema(ProductType))

module.exports = ProductModel