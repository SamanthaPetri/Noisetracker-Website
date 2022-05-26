let client = require("../dbConnect");
let projectCollection;
setTimeout(() => {
    projectCollection = client.mongoClient.db().collection("data");

}, 2000)

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

const updateProjects = (project,callback) => {
    projectCollection.updateOne(project,callback);
}

function deleteProjects (project) {
    projectCollection.deleteOne({"_id": ObjectId("628f49fda6d454d9aa1bbb11")},callback);
}

module.exports = {
    insertProjects, getProjects
}
