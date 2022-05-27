require('dotenv').config()
var express = require('express');
var app = express();
var cors = require("cors")
var port = process.env.port || 8000;
let dbConnect = require("./dbConnect");
let projectRoute = require("./routes/projectRoute");
const session = require("express-session");


app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use('/api/projects',projectRoute)
//app.use('/api/auth', auth)
//app.use('/api/user',userRoute)



app.listen(port, () => {
    console.log("App listening to port: " + port)

})