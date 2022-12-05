const userService = require('../services/userService')

//get method
const getUsers = async (req, res)=> {
    let data = await userService.getAllUsers()  
    res.json(data)
};


//add user(post)
const addUser = async (req,res)=> {
    const {name,lastName,dob} = req.body
    const result = await userService.addUsers({name,lastName,dob})
    res.json(result)
}

module.exports = {getUsers, addUser}