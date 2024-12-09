const { json } = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const DIR = "uploads/";

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: DIR,
  filename: (req, file, cb) => {
    if (file != undefined) {
      var regExFileName = /([\w\d_-]*)\.?[^\\\/]*$/i,
        regExFileNameExtension = /\.[0-9a-z]{1,5}$/i,
        fileNameBase = file.originalname.match(regExFileName)[1],
        fileNameExtension = file.originalname.match(regExFileNameExtension)[0],
        //build a dynamic file name using Date.now()
        fileName = fileNameBase + "_" + Date.now() + fileNameExtension;
      cb(null, fileName);
    }

    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
});
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 5000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});
const DeleteImage = async (req, res) => {
  if (!req.params.imagename) {
    console.log("No file received");
    message = "Error! in image delete.";
    return res.status(500).json("error in delete");
  } else {
    console.log("file received");
    console.log(req.params.imagename);
    try {
      fs.unlinkSync(DIR + "/" + req.params.imagename);
      console.log("successfully deleted /tmp/hello");
      res.status(200).json({
        success: true,
        message: "success",
      });
    } catch (err) {
      // handle the error
      res.status(200).json({
        success: true,
        message: "not found",
      });
    }
  }
};
const Upload = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Image uploaded",
      image: req.file,
    });
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

const DeleteAllImage = async (req, res) => {
  if (!req.body.fileName) {
    console.log("No file received");
    message = "Error! in image delete.";
    return res.status(500).json("error in delete");
  } else {
    console.log("file received");
    console.log(req.body.fileName);
    try {
      req.body.fileName.map((item) => {
        fs.unlinkSync(DIR + "/" + item);
        console.log("successfully deleted /tmp/hello");
      });
      res.status(200).json({
        success: true,
        message: "success",
      });
    } catch (err) {
      // handle the error
      res.status(200).json({
        success: true,
        message: "not found",
      });
    }
  }
};
module.exports = { imageUpload, DeleteAllImage, Upload, DeleteImage };
