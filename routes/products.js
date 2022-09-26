const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const bodyParser = require("body-parser");

let products = [];

// all routes in here start with /users
// getting all the users
router.get("/", (req, res) => {
  res.send(products);
});


router.post("/", (req, res) => {
  const product = req.body;

  // What goes into the array when the POST method is getting called
  products.push({
    ...product,
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.business(),
    id: uuidv4(),
  });

  // Message thats getting given, when POST method is getting called with succes
  res.send(`User with name ${product.firstName} added to the databse`);

  console.log(product);
});

// getting particular product, with its given ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  
  const foundProduct = products.find(product => product.id == id);

  res.send(foundProduct);
});


// Exporting the shits
module.exports = router;
