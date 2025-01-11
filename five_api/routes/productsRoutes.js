const express = require("express");
const router = express.Router();

// initializing products controller
const {
  getProduct,
  postProduct,
  deleteProduct,
  getProductbyid,
} = require("../controllers/productsController");
// to get all the products
router.route("/get/:id").get(getProductbyid);

router.route("/get").get(getProduct);

// to create a product
router.route("/create").post(postProduct);

// to delete a product using it's ID
router.route("/:productID").delete(deleteProduct);

// to update the quantity of a product
// router.route("/:productID/update_quantity/").update(updateProduct);

module.exports = router;
