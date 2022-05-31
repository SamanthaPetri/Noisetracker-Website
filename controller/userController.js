let userModel = require("../models/user")

const createUser = (req,res) => {
    console.log("New User registered", req.body)
    var newUser = req.body;
    userModel.insertUser(newUser,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"User Successfully registered", data: result})
        }
    })
}

const retrieveUsers = (req,res) => {
    userModel.getUser((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
}



module.exports = {
    retrieveUsers, createUser
}

// const getUser = (req,res) => {
//     res.json({statusCode: 200, message:"Success", data: {"name": "Navit", "age": 25}})
// }

// module.exports = {
//     getUser
// }