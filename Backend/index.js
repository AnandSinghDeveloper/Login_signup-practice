const express= require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const mongoconnect =require('./db/databaseconnect');




const App = express();

App.use(cors());

App.use(express.json());

App.use(express.urlencoded({extended:true}));

mongoconnect()
App.get('/',async(req , res)=>{
  res.send("hello")
})

App.listen(process.env.PORT||5000,()=>{
  console.log(`server running ${process.env.PORT}`);
  
})