const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const bodyParser = require("body-parser");
const { route } = require("./products");

let cart = [];

// all routes in here start with /cart
// getting the cart array
router.get("/", (req, res) => {
  res.send(cart);
});

router.post("/", (req, res) => {
  const producten = req.body;

  // wat in die array gaat
  cart.push({
    ...producten,
    id: uuidv4(),
  });

  res.send("het is je gelukt!");
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  cart = cart.filter(user => user.id !== id);

  res.send("cart het is gelukt");
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { productNaam } = req.body;

  const product = cart.find(producten => producten.id == id);

  if (productNaam) {
    product.productNaam = productNaam;
  }

  res.send("Het is veranderd");
});

// put betekent alles veranderen

// patch betekent dat je maar een bepaald iets verandert, en dus niet alles

module.exports = router;
