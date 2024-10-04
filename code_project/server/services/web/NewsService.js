const NewsModel = require("../../models/NewsModel")

const NewsService = {
    getList: async ({ _id }) => {
        if (_id) {
            return   NewsModel.find({_id,isPublish:1})
        } else {
            return NewsModel.find({isPublish:1}).sort({editTime:-1})
        }
    },
}

module.exports = NewsService