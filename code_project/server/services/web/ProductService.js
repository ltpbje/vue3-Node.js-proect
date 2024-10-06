const ProductModel = require("../../models/ProductModel")

const ProductService = {
    getList: async ({ _id }) => {
        if (_id) {
            return   ProductModel.find({_id})
        } else {
            return ProductModel.find()
        }
    }
}

module.exports = ProductService