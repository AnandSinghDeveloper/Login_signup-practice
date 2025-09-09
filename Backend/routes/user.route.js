const express = require("express");
const { registerUser } = require("../controllers/user-controller");
const router = express.Router();
const authUser = require("../middleware/auth.middleware");

router.post("/register", registerUser);

module.exports = router;
