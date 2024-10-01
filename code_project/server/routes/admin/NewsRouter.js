var express = require('express');
const NewsController = require('../../controllers/admin/NewsController');
var NewsRouter = express.Router();


var path = require('path')
// 图片上传处理
const multer  = require('multer')
// const upload = multer({ dest: 'public/newsuploads/' })
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/newsuploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

var upload = multer({ storage: storage });

//涉及文件上传，普通post不行，需要加上multer中间件
// 添加新闻路由
NewsRouter.post('/adminapi/news/add',upload.single('file'),NewsController.add)
// 获取新闻列表数据路由
NewsRouter.get('/adminapi/news/list', NewsController.getList)
// 获取单个新闻数据 用于编辑新闻数据获取
NewsRouter.get('/adminapi/news/list/:id', NewsController.getList)
// 是否发布文章路由
NewsRouter.put('/adminapi/news/publish',NewsController.publish)
// 删除新闻路由
NewsRouter.delete('/adminapi/news/list/:id',NewsController.delList)
module.exports = NewsRouter