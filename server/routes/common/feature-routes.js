const express = require("express");

const {
  addFeatureImage,
  getFeatureImages,
  removeFeatureImage,
} = require("../../controllers/common/feature-controller");

const router = express.Router();

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImages);
router.delete("/remove/:id", removeFeatureImage);

module.exports = router;