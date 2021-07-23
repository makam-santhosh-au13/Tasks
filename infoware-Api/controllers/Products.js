const Product = require("../models/ProductSchema");

const getProducts = async (req, res) => {
  res.json({
    products:[
      {
        name:"mobiles"
      },
      {
        name:"Laptops"
      }
    ]
  })
};

const createProduct = (req,res)=>{
  const product = new Product(req.body)
  // console.log("CREATING PRODUCT:",product)

  product.save((err,result)=>{
    if(err){
      return res.status(400).json({
        error:err
      })
    }
    res.status(200).json({
      product:result
    })
  })
}

module.exports = {
  getProducts,
  createProduct
};