var express = require("express");
var router = express.Router();
let controller = require("../controller");
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

router.get('/', (req, res) => {
    controller.userController.retrieveUsers(req,res)
})

router.post('/', (req, res) => {
    controller.userController.createUser(req,res)
})


module.exports = router;