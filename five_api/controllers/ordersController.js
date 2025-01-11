const Orders = require("../models/ordersModel");
const OrderItem = require("../models/order-item");
const asyncHandler = require("express-async-handler");

const getOrder = asyncHandler(async (req, res) => {
  const orderList = await Orders.find
    .populate("user", "name")
    .sort({ dateOrdered: -1 });
  if (!orderList) {
    res.status(500).json({ success: false });
  }
  res.status(200).json(orderList);
});
const getOrderbyid = asyncHandler(async (req, res) => {
  const order = await Orders.findOne({ _id: req.params.id })
    .populate("user", "name")
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
        populate: "category",
      },
    });

  if (!order) {
    res.status(500).json({ success: false });
  }
  res.send(order);
});
const postOrder = asyncHandler(async (req, res) => {
  const orderItemsIds = Promise.all(
    req.body.orderItems.map(async (orderItem) => {
      let newOrderItem = new OrderItem({
        quantity: orderItem.quantity,
        product: orderItem.product,
      });

      newOrderItem = await newOrderItem.save();

      return newOrderItem._id;
    })
  );
  const orderItemsIdsResolved = await orderItemsIds;

  const totalPrices = await Promise.all(
    orderItemsIdsResolved.map(async (orderItemId) => {
      try {
        const orderItem = await OrderItem.findById(orderItemId).populate(
          "product",
          "price"
        );
        if (!orderItem || !orderItem.product || !orderItem.product.price) {
          // Handle the case where 'orderItem' or 'orderItem.product.price' is missing
          return 0; // Set a default value or handle the error as appropriate
        }

        const totalPrice = orderItem.product.price * orderItem.quantity;
        return totalPrice;
      } catch (error) {
        console.error("Error fetching order item:", error);
        return 0; // Set a default value or handle the error as appropriate
      }
    })
  );

  const totalPrice = totalPrices.reduce((a, b) => a + b, 0);

  let order = new Orders({
    orderItems: orderItemsIdsResolved,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    user: req.body.user,
    email: req.body.email,
    shippingAddress1: req.body.shippingAddress1,
    shippingAddress2: req.body.shippingAddress2,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    zip: req.body.zip,
    phone: req.body.phone,
    status: req.body.status,
    totalPrice: totalPrice,
    deliveredAt: Date.now(),
  });
  order = await order.save();

  if (!order) return res.status(400).send("the order cannot be created!");

  res.send(order);
});
const putOrder = asyncHandler(async (req, res) => {
  const order = await Orders.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
    },
    { new: true }
  );

  if (!order) return res.status(400).send("the order cannot be update!");

  res.send(order);
});
const deleteOrderbyId = asyncHandler(async (req, res) => {
  Orders.findByIdAndRemove(req.params.id)
    .then(async (order) => {
      if (order) {
        await order.orderItems.map(async (orderItem) => {
          await OrderItem.findByIdAndRemove(orderItem);
        });
        return res
          .status(200)
          .json({ success: true, message: "the order is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "order not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});
const getTotalSales = asyncHandler(async (req, res) => {
  const totalSales = await Orders.aggregate([
    { $group: { _id: null, totalsales: { $sum: "$totalPrice" } } },
  ]);

  if (!totalSales) {
    return res.status(400).send("The order sales cannot be generated");
  }

  res.send({ totalsales: totalSales.pop().totalsales });
});
const getOrderCount = asyncHandler(async (req, res) => {
  const orderCount = await Orders.countDocuments((count) => count);

  if (!orderCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    orderCount: orderCount,
  });
});
const userOrderList = asyncHandler(async (req, res) => {
  const userOrderList = await Orders.find({ user: req.params.userid })
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
        populate: "category",
      },
    })
    .sort({ dateOrdered: -1 });

  if (!userOrderList) {
    res.status(500).json({ success: false });
  }
  res.send(userOrderList);
});

module.exports = {
  getOrder,
  getOrderbyid,
  postOrder,
  putOrder,
  deleteOrderbyId,
  getTotalSales,
  getOrderCount,
  userOrderList,
};
