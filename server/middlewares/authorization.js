const { Food } = require('../models')

function authorization (req,res,next) {
    let id = req.params.id
    Food.findOne({where:{id:req.params.id}
    })
    .then(data =>{

        if(!data){
            res.status(404).json({msg:`data not found`})
        }else{
            if(data.UserId == req.userData.id) {
                next()
            }else{
                res.status(403).json({msg:`forbidden`})
            }
        }
    })
    .catch(err => {
        next({status : 500 , msg: `Internal server error`})
    })
}

module.exports = authorization