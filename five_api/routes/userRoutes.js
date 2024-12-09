const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();
router.route("/getuser").get(getUser);

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current", validateToken).get(currentUser);

module.exports = router;
