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
NewsRouter.post('/adminapi/news/add',upload.single('file'),NewsController.add)

module.exports = NewsRouter