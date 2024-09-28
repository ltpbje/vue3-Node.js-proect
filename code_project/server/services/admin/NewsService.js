const NewsModel = require("../../models/NewsModel")

const NewsService = {
    add: async (data) => {
       const {title,content,category,isPublish,cover,editTime}= data
        // console.log('数据库操作')
        return NewsModel.create({title,content,category,isPublish,cover,editTime })
    } 
}

module.exports = NewsService