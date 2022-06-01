let client = require("../dbConnect");
let projectCollection;
setTimeout(() => {
    projectCollection = client.mongoClient.db().collection("user");

}, 2000)



module.exports = projectCollection