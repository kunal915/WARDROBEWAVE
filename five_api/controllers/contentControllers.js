const asyncHandler = require("express-async-handler");
const { ContentModel } = require("../models/contentModel");

const getContent = asyncHandler(async (req, res) => {
  const content = await ContentModel.find();
  res.status(200).json(content);
});
const createContent = asyncHandler(async (req, res) => {
  try {
    console.log("The request body is:", req.body);
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    const Contents = await ContentModel.create({
      title,
      content,
    });
    const response = {
      success: true,
      message: "success",
      data: Contents.toObject(),
    };
    res.status(201).json(response);
  } catch (error) {
    console.error("Error while saving content:", error);
    res
      .status(500)
      .json({ success: false, message: "Content could not be saved." });
  }
});

module.exports = {
  getContent,
  createContent,
};
