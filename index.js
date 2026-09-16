const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', price: 45000 },
  { id: 2, name: 'Mouse', price: 500 },
  { id: 3, name: 'Keyboard', price: 1200 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
