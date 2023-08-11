const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

//add user model 
const UserModel = require('./models/Config')

//mongo connect
mongoose.connect("mongodb://127.0.0.1:27017/mpi")

//get data display
app.get('/display',(req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


//server connections for create add data to mongo db
app.post("/config",(req,res) => {
    UserModel.create(req.body)
    .then(configuration => res.json(configuration))
    .catch(err => res.json(err))
})


app.listen(3002,() => {
    console.log("Server is running");
})
