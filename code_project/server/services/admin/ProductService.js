const ProductModel = require("../../models/ProductModel")

const ProductService = {
    add: async (data) => {
       const {title,introduction,detail,cover,editTime,username}= data
        // console.log('数据库操作')
        return ProductModel.create({title,introduction,detail,cover,editTime,username})
    },
    updateList: async ({
            _id,
            title,
            introduction,
            detail,
            cover,
            editTime
            // editTime:new Date()
        }) => {
        if (cover) {
            return ProductModel.updateOne({ _id }, {
            title,
            introduction,
            detail,
            cover,
            editTime
            })
        } else {
            return ProductModel.updateOne({ _id }, {
                title,
                introduction,
                detail,
                editTime
            })
        }
    },
    getList: async ({ _id ,query}) => {
        if (_id) {
            return   ProductModel.find({_id})
        } else {
            return ProductModel.find({username: query.username})
        }
    },
    // publish: async ({_id,isPublish,editTime}) => {
    //     return NewsModel.updateOne({
    //         _id
    //     }, {
    //         isPublish,
    //         editTime
    //     })
    // },
    delList: async ({ _id }) => {
        return ProductModel.deleteOne({
            _id
        })
    }
}

module.exports = ProductService