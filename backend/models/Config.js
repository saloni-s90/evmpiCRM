const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    siteid : String,
    esim : String,
    cname : String,
    device : String
})

const UserModel = mongoose.model("configuration",UserSchema)
module.exports = UserModel;