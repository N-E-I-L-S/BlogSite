require('dotenv').config()
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI
const connectToMongo =() =>{
    mongoose.connect(mongoURI, ()=>console.log("connected to Mongo"))
}
module.exports = connectToMongo;