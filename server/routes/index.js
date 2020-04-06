const router = require('express').Router()
const UserController = require('../controllers/userController')
const FoodController = require('../controllers/foodController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')


router.post('/register',UserController.registerUser)
router.post('/login',UserController.loginUser)
router.post('/foods',authentication,FoodController.addFood)
router.get('/foods',authentication,FoodController.getFood)
router.delete('/foods/:id',authentication,authorization,FoodController.deleteFood)

module.exports = router