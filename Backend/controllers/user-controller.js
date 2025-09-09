const userModel = require("../model/user.model");
// const authUser = require('../middleware/auth.middleware');

const registerUser = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        sucess: false,
        message: "All fields are required",
      });
    }

    const user = await userModel.create({
      name,
      email,
      lastname,
      password,
      //  password : await userModel.hashPassword(password)
    });

    user.save();

    res.status(201).json({
      sucess: true,
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "Internal Server Error",
    });
  }
};

const loginUser = async (req, res) => {
  try {

    const {email, password} = req.body

    const ChackedUser = await userModel.find({email}.)


    
  } catch (error) {
    
  }
};
module.exports = { registerUser };
