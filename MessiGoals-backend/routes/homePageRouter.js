var express = require('express');
var router = express.Router();
var homePageController = require('../controller/homePageController')

//Listado
router.get("/", homePageController.listado);

module.exports = router;