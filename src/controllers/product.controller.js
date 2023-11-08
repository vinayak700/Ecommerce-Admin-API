import { ProductModel } from "../models/product.model.js";

// Instantiate ProductModel
const productModel = new ProductModel();

export default class ProductController {
    // Creating a new Product
    createProduct = async (req, res) => {
        const { name, quantity } = req.body;
        try {
            const newProduct = await productModel.create(name, quantity);
            if (!newProduct) {
                return res.status(400).json({ data: { message: 'Failed to create the product' } });
            }
            return res.status(201).json({ data: { product: newProduct } });
        } catch (error) {
            console.log('Something went wrong', error);
        }
    }
    // Retrieving all Products
    getProducts = async (req, res) => {
        try {
            const products = await productModel.getAll();
            if (!products) {
                return res.status(200).json({ data: { message: 'No products found' } });
            }
            return res.status(200).json({ data: { products: products } });
        } catch (error) {
            console.log('Something went wrong', error);
        }
    }

    // Update a specific product quantity with an id
    updateProductQty = async (req, res) => {
        const { id } = req.params;
        const { number } = req.query;
        try {
            const product = await productModel.update_qty(id, number);
            if (!product) {
                return res.status(400).json({ data: { message: 'Failed to update the product quantity' } });
            }
            return res.status(200).json({ data: { product: product, message: 'updated successfully' } });
        } catch (error) {
            console.log('Something went wrong', error);
        }
    }

    // Delete a specific product with an id
    deleteProduct = async (req, res) => {
        const { id } = req.params;
        try {
            const product = await productModel.delete(id);
            if (!product) {
                return res.status(400).json({ data: { message: 'Failed to delete the product' } });
            }
            return res.status(200).json({ data: { messsage: 'product deleted' } });
        } catch (error) {
            console.log('Something went wrong', error);
        }
    }
}