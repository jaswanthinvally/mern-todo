const express = require('express')
const UserRouter = express.Router()

UserRouter.route('/signup').post((req,res) => {
    res.json({
        result : "this is the signup endpoint"
    })
})

UserRouter.route('/signin').post((req,res) => {
    res.json({
        result : "this is the signin endpoint"
    })
})
UserRouter.route('/todo').get(async(req,res) => {
     res.json({
        result : "to do get endpoint"
    })

} )


module.exports = UserRouter

