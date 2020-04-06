const router = require('express').Router()
const UserController = require('../controllers/userController')
const FoodController = require('../controllers/foodController')


router.post('/register',UserController.registerUser)
router.post('/login',UserController.loginUser)
router.get('/food',FoodController.addFood)
router.post('/food',FoodController.getFood)
router.delete('/food/:id',FoodController.deleteFood)

module.exports = router