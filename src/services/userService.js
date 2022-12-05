const user = require('../db/models/userModel')


//users Service
const getAllUsers = async ()=> {
    let data = await user.findAll({
      where: {
        deletedAt: null
      }
    })
  
    return data.length ? data : {message: 'User not exist'}
  }

//add user
const addUsers = async ({name,lastName,dob}) =>{
  if(!name || !lastName || !dob){
    return {message:'Not filled all parts'}
  }
    user.create ({
      name,
      lastName,
      dob
    })
    return {message:'User added succesfuly'}
}


  
  module.exports ={ getAllUsers , addUsers}