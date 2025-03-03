
const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model')


module.exports.authUser= async (req,res,next )=>{
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if(!token){
   return res.status(201).json({message : 'Unathorized'});
  };
  
  

  try {

    const decoded = jwt.verify(token ,process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
   
    req.user=user;

    return next();

  } catch (error) {
    return res.status(401).json({message : 'Unathorized'});
  }
};

console.log(module.exports.authUser);

