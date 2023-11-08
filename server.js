import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// file imports
import productRouter from './src/routes/product.route.js';
import connectTodb from './config.js';

// Instantiate express application
const app = express();

// Middleware to parse json data
app.use(express.json());

// Application routes
app.use('/products', productRouter);

// listen to app server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    connectTodb();
})