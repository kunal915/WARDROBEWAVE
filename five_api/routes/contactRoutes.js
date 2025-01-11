const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts);
router.route("/post").post(createContact);
router.route("/:id").get(getContact).delete(deleteContact).put(updateContact);
module.exports = router;
