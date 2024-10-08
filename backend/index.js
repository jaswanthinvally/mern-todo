const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const Db = require('./Db')
const port  = process.env.PORT
const UserRouter = require('./Routes/UserRoutes.js')





app.use(express.json())


app.use("/api",UserRouter)




app.listen(port,() => console.log("the server is running in the port : ",port))
Db()


