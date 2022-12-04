const process = require('process')

const { Sequelize } = require('sequelize');
const signale = require('signale')
const pgp = require('pg')



const User = require('./models/userModel')
const models = [User]


const connection = new Sequelize(
  process.env.DATABASE, 
  process.env.DATABASE_USERNAME, 
  process.env.DATABASE_PASSWORD,
   {
  host: 'localhost',
  dialect:  'postgres',
  logging:false, 
});


(async ()=>{
    try {
        await connection.authenticate();
        signale.success('DB:Succes');
      } catch (error) {
        signale.error('DB:Error', error);
      }
    }) ()
    models.map((m) => m.init(connection));


    (async () => {
        await Promise.all(models.map((m) => m.sync({ force: false })));
      })()
    
    module.exports = connection