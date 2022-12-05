require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


require('../db/connection')
//routes
 const routes = require('../routes/userRoute')
 const bodyParser = require('body-parser')
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)



app.listen(port,()=>{
    if(port){
        console.log(`Connected to port ${port}`)
    }else{
        console.log(`Error`,error)
    }
})