const express = require('express')
const { UserModel, TodoModel } = require('../Models/UserModels')
const UserRouter = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

UserRouter.route('/signup').post(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.json({
            message: "please enter the required data"
        })
    }
    const hashedpasword = await bcrypt.hash(password, 10)
    console.log("this is the hased password : ", hashedpasword)

    const CreateUser = await UserModel.create({
        name: name,
        email: email,
        password: hashedpasword

    })
        .then((result) => {
            res.json({
                status: "user creation sucessful",
                result
            })

        })
        .catch((err) => {
            res.json({
                status: "user creation failed",
                err

            })
        })
})

UserRouter.route('/signin').post(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.json({
            message: "please enter the required data"
        })
    }



    try {
        const User = await UserModel.findOne({ email })
        if (!User) {
            return res.json({
                message: "user not found"
            })
        }

        const IsMatch = await bcrypt.compare(password, User.password)


        if (!IsMatch) {
            return res.json({
                message: "invaild credentials"
            })
        }

        return res.json({
            message: "sign-in successful"
        });

    } catch (err) {

        res.json({
            err
        })

    }


})
UserRouter.route('/todo').post(async (req, res) => {
    const { title, done } = req.body
    const CreateTodo = await TodoModel.create({
        title: title,
        done: done


    }).then(() => res.json({ message: "todo created" }))
        .catch((err) => res.json({ message: "todo creation failed" }))

})
UserRouter.route('/todo/:id').delete(async (req, res) => {

    const { id } = req.params;

    try {
        const deletedTodo = await TodoModel.findByIdAndDelete(id);

        if (deletedTodo) {
            res.json({ message: "Todo deleted successfully" });
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (err) {
        res.status(500).json({
            message: "Error deleting todo", error: err.message
        });
    }

})


module.exports = UserRouter

