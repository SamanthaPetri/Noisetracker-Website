var express = require("express")
var app = express()
var cors = require("cors")
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoute");
let userRoute = require("./routes/userRoute");

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/projects',projectRoutes)
app.use('/api/user',userRoute)

    const insertProjects = (project, callback) => {
        projectCollection.insert(project, callback);
    }

    const getProjects = (callback) => {
        projectCollection.find({}).toArray(callback);
    }

    var port = process.env.port || 3000;

    app.listen(port, () => {
        console.log("App listening to: " + port)
    })