const express = require("express");
const router = express.Router();
// const validator = require("../helpers/index")

const {
  getProducts, createProduct
} = require("../controllers/Products");

router.get("/",getProducts);
router.post("/product",createProduct);

module.exports = router;