const router = require("express").Router();

const UploadImage = require("../middleware/ImageUpload");

router.post(
  "/",
  // VerifyToken,
  UploadImage.imageUpload.single("image"),
  UploadImage.Upload
);
router.delete("/deleteimage/:imagename", UploadImage.DeleteImage);

module.exports = router;
