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
  const { name, price } = req.body ?? {};

  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'Name must be a non-empty string' });
  }

  if (typeof price !== 'number' || Number.isNaN(price) || price < 0) {
    return res.status(400).json({ message: 'Price must be a non-negative number' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// error handler - catches bad JSON bodies and returns JSON instead of an HTML page
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Invalid JSON in request body' });
  }
  next(err);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
