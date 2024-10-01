const NewsModel = require("../../models/NewsModel")

const NewsService = {
    add: async (data) => {
       const {title,content,category,isPublish,cover,editTime}= data
        // console.log('数据库操作')
        return NewsModel.create({title,content,category,isPublish,cover,editTime })
    },
    getList:async () => {
        return NewsModel.find({})
    },
    publish: async ({_id,isPublish,editTime}) => {
        return NewsModel.updateOne({
            _id
        }, {
            isPublish,
            editTime
        })
    },
    delList: async ({ _id }) => {
        return NewsModel.deleteOne({
            _id
        })
    }
}

module.exports = NewsService