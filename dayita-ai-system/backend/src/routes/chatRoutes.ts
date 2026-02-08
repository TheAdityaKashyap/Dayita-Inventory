import { Router } from 'express';
import { ChatController } from '../controllers/chatController';

const router = Router();
const chatController = new ChatController();

router.post('/send-message', chatController.sendMessage);
router.get('/get-messages', chatController.getMessages);

export default router;