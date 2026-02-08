import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true,
    },
    page: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Product = model('Product', productSchema);

export default Product;