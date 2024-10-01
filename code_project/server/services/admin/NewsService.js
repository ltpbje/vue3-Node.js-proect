const NewsModel = require("../../models/NewsModel")

const NewsService = {
    add: async (data) => {
       const {title,content,category,isPublish,cover,editTime}= data
        // console.log('数据库操作')
        return NewsModel.create({title,content,category,isPublish,cover,editTime })
    },
    updateList: async ({ title, content, category, isPublish,_id,cover,editTime }) => {
        if (cover) {
            return NewsModel.updateOne({ _id }, {
                title, content, category, isPublish,cover,editTime
            })
        } else {
            return NewsModel.updateOne({ _id }, {
                title, content, category, isPublish,editTime
            })
        }
    },
    getList:async ({_id}) => {
        return  _id ? NewsModel.find({_id}) : NewsModel.find({})
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