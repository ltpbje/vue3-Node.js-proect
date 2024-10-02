var express = require('express');
const ProductController = require('../../controllers/admin/ProductController');
var ProductRouter = express.Router();

var path = require('path')
// 图片上传处理
const multer  = require('multer')
// const upload = multer({ dest: 'public/newsuploads/' })
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/productuploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

var upload = multer({ storage: storage });

//涉及文件上传，普通post不行，需要加上multer中间件
// 添加新闻路由
ProductRouter.post("/adminapi/product/add",upload.single('file'),ProductController.add)
// // 获取新闻列表数据路由
// ProductRouter.get('/adminapi/news/list', NewsController.getList)
// // 更新新闻路由
// ProductRouter.post('/adminapi/news/list',upload.single('file'),NewsController.updateList)
// // 获取单个新闻数据 用于编辑新闻数据获取
// ProductRouter.get('/adminapi/news/list/:id', NewsController.getList)
// // 是否发布文章路由
// ProductRouter.put('/adminapi/news/publish',NewsController.publish)
// // 删除新闻路由
// ProductRouter.delete('/adminapi/news/list/:id',NewsController.delList)


module.exports = ProductRouter