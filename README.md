# PITC Express.js Assignment

A simple Express.js API with two routes for products.

## How to run

```
npm install
npm start
```

The server runs on http://localhost:3000

## Routes

- `GET /products` - returns the list of products
- `POST /products` - adds a new product

Sample body for POST:

```json
{
  "name": "Monitor",
  "price": 8000
}
```
