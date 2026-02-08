import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    public async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error: error.message });
        }
    }

    public async getProductById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const product = await this.productService.getProductById(id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching product', error: error.message });
        }
    }
}

export default ProductController;