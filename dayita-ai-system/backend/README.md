# Dayita AI System Backend

## Overview
The Dayita AI System is a full-stack application designed to provide an intelligent product catalog assistant. This backend component handles chat interactions, product management, and AI processing.

## Features
- **Chat Functionality**: Manages user interactions and responses through a chat interface.
- **Product Management**: Fetches and manipulates product data from a JSON file.
- **AI Processing**: Utilizes AI services to generate responses based on user queries.

## Technologies Used
- Node.js
- TypeScript
- Express.js
- MongoDB (or any other database as per configuration)
- Docker (for containerization)

## Project Structure
```
backend
├── src
│   ├── controllers          # Contains controllers for handling requests
│   ├── services             # Contains services for business logic
│   ├── routes               # Contains route definitions
│   ├── models               # Contains data models
│   ├── middleware           # Contains middleware functions
│   ├── config               # Contains configuration files
│   ├── utils                # Contains utility functions
│   └── server.ts            # Entry point for the backend application
├── data                     # Contains static data files
│   └── products_ai.json     # Product data in JSON format
├── package.json             # NPM configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Documentation for the backend
```

## Getting Started
1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd dayita-ai-system/backend
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Set Up Environment Variables**: 
   Copy `.env.example` to `.env` and configure your environment variables.

4. **Run the Application**: 
   ```
   npm start
   ```

5. **Access the API**: 
   The backend API will be available at `http://localhost:3000` (or the port specified in your configuration).

## API Endpoints
- **Chat Endpoints**: Handle chat messages and interactions.
- **Product Endpoints**: Fetch product details and manage product data.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.