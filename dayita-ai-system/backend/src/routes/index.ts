import { Router } from 'express';
import chatRoutes from './chatRoutes';
import productRoutes from './productRoutes';

const router = Router();

// Use chat-related routes
router.use('/chat', chatRoutes);

// Use product-related routes
router.use('/products', productRoutes);

export default router;