import mongoose from 'mongoose';

// creating product schema
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
}, { versionKey: false });

// create product schema model followed by exporting it
const Product = mongoose.model('ProductModel', productSchema);
export default Product;