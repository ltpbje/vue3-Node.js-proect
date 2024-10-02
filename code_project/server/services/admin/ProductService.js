const ProductModel = require("../../models/ProductModel")

const ProductService = {
    add: async (data) => {
       const {title,introduction,detail,cover,editTime,username}= data
        // console.log('数据库操作')
        return ProductModel.create({title,introduction,detail,cover,editTime,username})
    },
    // updateList: async ({ title, content, category, isPublish,_id,cover,editTime }) => {
    //     if (cover) {
    //         return NewsModel.updateOne({ _id }, {
    //             title, content, category, isPublish,cover,editTime
    //         })
    //     } else {
    //         return NewsModel.updateOne({ _id }, {
    //             title, content, category, isPublish,editTime
    //         })
    //     }
    // },
    // getList: async ({ _id ,query}) => {
    //     if (_id) {
    //         return   NewsModel.find({_id})
    //     } else {
    //         return NewsModel.find({username: query.username})
    //     }
    // },
    // publish: async ({_id,isPublish,editTime}) => {
    //     return NewsModel.updateOne({
    //         _id
    //     }, {
    //         isPublish,
    //         editTime
    //     })
    // },
    // delList: async ({ _id }) => {
    //     return NewsModel.deleteOne({
    //         _id
    //     })
    // }
}

module.exports = ProductService