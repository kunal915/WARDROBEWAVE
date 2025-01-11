const express = require("express");
const router = express.Router();
const {
  getOrder,
  getOrderbyid,
  postOrder,
  putOrder,
  deleteOrderbyId,
  getTotalSales,
  getOrderCount,
  userOrderList,
} = require("../controllers/ordersController");

router.route("/").get(getOrder);
router.route("/:id").get(getOrderbyid);
router.route("/").post(postOrder);
router.route("/:id").put(putOrder);
router.route("/:id").delete(deleteOrderbyId);
router.route("/get/totalsales").get(getTotalSales);
router.route("/get/count").get(getOrderCount);
router.route("/get/userorders/:userid").get(userOrderList);

module.exports = router;
