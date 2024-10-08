const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String

})
const TodoSchema = new mongoose.Schema({
    title : String,
    userid: mongoose.Schema.ObjectId,
    done : Boolean

})

const UserModel = mongoose.model("UserSchema",UserSchema)
const TodoModel = mongoose.model("TodoSchema",TodoSchema)

module.exports = {
    UserModel : UserModel,
    TodoModel  : TodoModel
}






