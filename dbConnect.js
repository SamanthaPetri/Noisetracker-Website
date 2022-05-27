require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

//Database connection
const uri = "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@cluster0.dbnau.mongodb.net/NoiseTracker?retryWrites=true&w=majority" //uses env
const client = new MongoClient(uri, { useNewUrlParser: true })

client.connect((err,db) => {
    if(!err){
      console.log('Database Connected')
    }else{
      console.log('[error]',err)
    }
});


exports.mongoClient = client;