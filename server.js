require('dotenv').config()
var express = require('express');
var app = express();
var cors = require("cors")
var port = process.env.port || 3000;
const MongoClient = require("mongodb").MongoClient;
let projectCollection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Database connection
const uri = "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@cluster0.d4rqo.mongodb.net/SIT725?retryWrites=true&w=majority" //uses env
const client = new MongoClient(uri, { useNewUrlParser: true })


const createColllection = (collectionName) => {
    client.connect((err, db) => {
        projectCollection = client.db().collection(collectionName);
        if (!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}

app.listen(port, () => {
    console.log("App listening to port: " + port)
    createColllection("data")
})