const router = require('express').Router()
const userController = require('../controllers/usersController')


//+
router.get('/', userController.getUsers)
//+
router.post('/',userController.addUser)

module.exports = router