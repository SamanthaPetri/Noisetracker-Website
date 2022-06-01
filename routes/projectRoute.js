var express = require("express");
var router = express.Router();
let controller = require("../controller");
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

router.get('/', async (req, res) => {
    controller.projectController.retrieveProjects(req,res)
})

router.post('/', async (req, res) => {
    controller.projectController.createProjects(req,res)
})


module.exports = router;