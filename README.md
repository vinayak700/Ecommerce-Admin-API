# E-commerce Platform Inventory Management API

This is a simple Node.js and MongoDB-based API for managing product inventory. The API allows you to create, list, delete, and update product quantities.

## Setup

1. Install Node.js and MongoDB on your local system.
2. Clone this repository.

## Tech Stack

- ExpressJs
- NodeJs
- MongoDB

```bash
git clone https://github.com/yourusername/ecommerce-inventory-api.git
cd ecommerce-inventory-api
```

1. Install dependencies.

```
npm install
```

2. Create a .env file in the root directory and set your MongoDB connection URL:

```
MONGO_URI=your_mongodb_uri
```

3. Start the server.

```
npm start
```

The API will be available at http://localhost:3000.

## Project Structure & Flow of Code

ecommerce-inventory-api/
├── node_modules
├── src/
│ ├── controllers/
│ │ └── product.controller.js
│ ├── models/
│ │ └── product.model.js
│ ├── routes/
│ │ └── product.route.js
│ ├── schemas/
│ │ └── product.schema.js
├── server.js
├── config.js
├── .env
├── README.md
└── package.json

## API Endpoints

### Create Product

- **URL**: POST /products/create
- **Request Body**:

```
{
  "name": "laptop",
  "quantity": 10
}

```

- **Response**

```
{
  "data": {
    "product": {
      "name": "laptop",
      "quantity": 10
    }
  }
}
```

### List Products

- **URL**: GET /products
- **Response**

```
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "laptop",
        "quantity": 10
      },
      {
        "id": 2,
        "name": "camera",
        "quantity": 5
      },
      {
        "id": 3,
        "name": "smartwatch",
        "quantity": 8
      }
    ]
  }
}
```

### Delete a Product

- **URL**: DELETE /products/:id
- **Response**

```
{
  "data": {
    "message": "Product deleted"
  }
}
```

### Update Product Quantity

- **URL**: POST /products/:id/update_quantity/?number=10
- **Response**

```
{
  "data": {
    "product": {
      "id": 1,
      "name": "laptop",
      "quantity": 20
    },
    "message": "Updated successfully"
  }
}
```
