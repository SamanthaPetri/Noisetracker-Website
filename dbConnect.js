//change db connection from server.js to here
// require('dotenv').config()
// const MongoClient = require("mongodb").MongoClient;

// const uri = "mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASSWORD + "@cluster0.d4rqo.mongodb.net/SIT725?retryWrites=true&w=majority" //uses env
// const client = new MongoClient(uri, { useNewUrlParser: true })

// client.connect((err, db) => {
//     if (!err) {
//         console.log('MongoDB Connected')
//     }
//     else {
//         console.log("DB Error: ", err);
//         process.exit(1);
//     }
// })

// exports.mongoClient = client;