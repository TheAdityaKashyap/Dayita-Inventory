import { config } from 'dotenv';

config();

const environment = {
    PORT: process.env.PORT || 5000,
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/dayita-ai',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    AI_API_KEY: process.env.AI_API_KEY || 'your_ai_api_key',
    NODE_ENV: process.env.NODE_ENV || 'development',
};

export default environment;