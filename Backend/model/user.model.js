const mongoose = require("mongoose");

const userSchma = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchma);
// userSchma.methods.generateToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET , {expiresIn : '24h'});
//   return token;
// };

// userSchma.statics.hashPassword = async (password) => {
//   return await bcrypt.hash(password, 10);
// };
