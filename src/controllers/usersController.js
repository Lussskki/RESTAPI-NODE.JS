const userService = require('../services/userService')

const getUsers = async (req, res)=> {
    let data = await userService.getAllUsers()  
    res.json(data)
}

module.exports = {getUsers}