import express from 'express';
import ProductController from '../controllers/product.controller.js';

// Initialization
const productRouter = express.Router();
const productController = new ProductController();

// create product routes
productRouter.post('/create', productController.createProduct);
productRouter.get('/', productController.getProducts);
productRouter.post('/:id/update_quantity/', productController.updateProductQty);
productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;