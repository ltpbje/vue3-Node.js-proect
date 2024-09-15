var express = require('express');
var router = express.Router();


router.post('/adminapi/user/login', UserController.login);

module.exports = router;
