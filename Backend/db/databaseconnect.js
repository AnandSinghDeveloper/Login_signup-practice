const mongoose = require('mongoose')
const dotenv  =require('dotenv').config()

const mongoconnect = async ()=>{
  try {

    const dbconnect= await mongoose.connect(`${process.env.DATA_BASE_STRING}`);

    console.log('dbconnect',dbconnect.connection.host);
    
    
  } catch (error) {
    
    console.log('mongodb conection error ', error);
     process.exit(1)

    throw error
   
    
  }

 
}

module.exports = mongoconnect;

