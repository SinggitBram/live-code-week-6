const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class UserController {

    static registerUser(req,res,next) {
        let obj = {
            email:req.body.email,
            password:req.body.password
        }
        User.findOne({where:{email : req.body.email}
        })
        .then(data =>{
            if(data){
                res.status(400).json({ msg: `email already taken`})
            }else {
                return User.create(obj)
            }
        })
        .then(data2 => {
            res.status(201).json(data2)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static loginUser(req,res,next) {

        let {email , password} = req.body

        User.findOne({where:{email:email}
        })
        .then(data => {
            if(!data){
                res.status(404).json({msg: `wrong email or password`})
            }else{
                if(bcrypt.compareSync(password,data.password)){
                    let access_token = jwt.sign({ id:data.id , email:data.email} , process.env.JWT_SECRET)
                    res.status(200).json({access_token : access_token})
                }
            }
        })


    }
}







module.exports = UserController