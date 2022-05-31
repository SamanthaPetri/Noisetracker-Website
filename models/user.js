let client = require("../dbConnect");
let projectCollection;
setTimeout(() => {
    projectCollection = client.mongoClient.db().collection("user");

}, 2000)

const insertUser = (project,callback) => {
    projectCollection.insert(project,callback);
}

// const getUser = (callback) => {
//     projectCollection.findOne({}).toArray(callback);
// }


// const getUser = (callback) => {
//     projectCollection.findOne({email},{});
// }

const getUser = (callback) => {
    projectCollection.find({"email":/test/i}).toArray(callback);
}

const updateProjects = (project,callback) => {
    projectCollection.updateOne(project,callback);
}

function deleteProjects (project) {
    projectCollection.deleteOne({"_id": ObjectId("628f49fda6d454d9aa1bbb11")},callback);
}

const model = projectCollection
module.exports = {
    insertUser, getUser, model
}
