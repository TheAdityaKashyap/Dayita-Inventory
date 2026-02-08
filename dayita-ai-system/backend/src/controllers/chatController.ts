import { Request, Response } from 'express';
import { AIService } from '../services/aiService';
import { Message } from '../models/Message';

class ChatController {
    private aiService: AIService;

    constructor() {
        this.aiService = new AIService();
    }

    public async sendMessage(req: Request, res: Response): Promise<void> {
        const { userId, content } = req.body;

        try {
            const response = await this.aiService.generateResponse(content);
            const message = new Message({
                userId,
                content,
                response,
            });

            await message.save();
            res.status(200).json({ message: response });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send message' });
        }
    }

    public async getMessages(req: Request, res: Response): Promise<void> {
        try {
            const messages = await Message.find().sort({ createdAt: -1 }).limit(50);
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve messages' });
        }
    }
}

export default new ChatController();