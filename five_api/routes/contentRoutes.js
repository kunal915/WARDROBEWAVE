const express = require("express");
const router = express.Router();
const {
  getContent,
  createContent,
} = require("../controllers/contentControllers");

router.route("/").get(getContent);
router.route("/createcontent").post(createContent);
module.exports = router;
