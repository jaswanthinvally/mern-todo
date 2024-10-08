const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const mongodb_url = process.env.MONGODB_URL



const Db = async () => await mongoose.connect(mongodb_url,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log("database connection sucessful"))
.catch((err) => console.log("database connection error : ",err))



module.exports = Db