import { Configuration, OpenAIApi } from 'openai';

class AIService {
    private openai: OpenAIApi;

    constructor(apiKey: string) {
        const configuration = new Configuration({
            apiKey: apiKey,
        });
        this.openai = new OpenAIApi(configuration);
    }

    async generateResponse(prompt: string): Promise<string> {
        try {
            const response = await this.openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
            });

            return response.data.choices[0].message?.content || 'No response generated.';
        } catch (error) {
            console.error('Error generating response:', error);
            throw new Error('Failed to generate response from AI service.');
        }
    }
}

export default AIService;