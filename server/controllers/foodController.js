const { Food } = require('../models')

class FoodController {

    static addFood (req,res,next){
 
        let obj = {
            title:req.body.title,
            price:req.body.price,
            ingredients:req.body.ingredients,
            tag:req.body.tag,
            UserId: req.userData.id
        }
        Food.create(obj)
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static getFood (req,res,next) {
        Food.findAll({where: {UserId:req.userData.id}
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static deleteFood (req,res,next) {
        let id = req.params.id
        Food.findOne({where:{id:id}
        })
        .then(data =>{
            if(!data){
                res.status(404).json({msg:`data not found`})
            }else{
                return Food.destroy({where:{id:data.id}
                })
            }
        })
        .then(data2 =>{
            res.status(200).json({msg: `Successfully delete food from your menu`})
        })
        .catch(err => {
            res.status(500).json(err)
        })   
    }

}

module.exports = FoodController