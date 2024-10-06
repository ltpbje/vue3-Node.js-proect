var express = require('express');
const ProductController = require('../../controllers/web/ProductController');
var ProductRouter = express.Router();

// 获取新闻列表数据路由
ProductRouter.get('/webapi/product/list', ProductController.getList)

module.exports = ProductRouter