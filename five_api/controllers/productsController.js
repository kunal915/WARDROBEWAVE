const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
});
const getProductbyid = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  res.status(200).json(product);
});
const postProduct = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { title, price, description, image, category } = req.body;
  if (!title || !price || !description || !image || !category) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const product = await Product.create({
    title,
    price,
    description,
    image,
    category,
  });
  res.status(201).json(product);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error(`Product with ${req.params.id} not Found`);
  }
  await Product.findByIdAndDelete();
  res.status(200).json(product);
});

module.exports = {
  getProduct,
  postProduct,
  deleteProduct,
  getProductbyid,
};
