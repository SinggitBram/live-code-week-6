const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class UserController {

    static registerUser(req,res,next) {
        let obj = {
            email:req.body.email,
            password:req.body.password
        }
        User.create(obj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }

    static loginUser(req,res,next) {

        let {email , password} = req.body

        User.findOne({where:{email:email}
        })
        .then(data => {
            if(!data)
        })


    }
}







module.exports = UserController