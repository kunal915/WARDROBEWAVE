const mongoose = require("mongoose");

// Define the OrderItem schema
const orderItemSchema = new mongoose.Schema({
  quantity: Number,
  product: { type: mongoose.Schema.Types.ObjectId }, // Assuming 'Product' is the name of another model
});

// Compile the schema into a model
const OrderItem = mongoose.model("OrderItem", orderItemSchema);

module.exports = OrderItem;
