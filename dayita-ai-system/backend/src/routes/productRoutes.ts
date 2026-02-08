import { Router } from 'express';
import { ProductController } from '../controllers/productController';

const router = Router();
const productController = new ProductController();

// Route to get all products
router.get('/products', productController.getAllProducts);

// Route to get a product by ID
router.get('/products/:id', productController.getProductById);

// Route to search products
router.get('/products/search', productController.searchProducts);

export default router;