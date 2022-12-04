const user = require('../db/models/userModel')


//users Service
const getAllUsers = async ()=> {
    const data = await user.findAll({
      where: {
        deletedAt: null
      }
    })
  
    return data.length ? data : {message: 'User not exist'}
  }



  
  module.exports ={ getAllUsers}