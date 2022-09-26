const express = require("express");
const app = express();
const port = 3001;
const usersRoutes = require("./routes/products.js");
const cartRoutes = require("./routes/cart.js");
const bodyParser = require("body-parser");
 

 
app.use(bodyParser.json())

app.use('/products', usersRoutes);

app.use('/cart', cartRoutes);

app.get('/', (req, res) => res.send('Hello from Amsterdam.'));

app.listen(port, () => {
  console.log(`Ziflie API server listening on port ${port}`);
});

