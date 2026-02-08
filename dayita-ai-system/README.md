# Dayita AI System

## Overview
Dayita AI is an intelligent product catalogue assistant designed to help users find and interact with a comprehensive welding product database. The system is built using a full-stack architecture, incorporating both frontend and backend components.

## Project Structure
The project is organized into three main directories:

- **frontend**: Contains the React application that serves as the user interface.
- **backend**: Contains the Node.js application that handles API requests and manages data.
- **shared**: Contains shared types and interfaces used across both frontend and backend.

## Frontend
The frontend is built with React and TypeScript. It includes components for chat functionality, a header, a sidebar for navigation, and a message list to display chat messages.

### Key Components
- **Chat**: Manages the chat interface, user input, and message display.
- **Header**: Displays the application title and navigation elements.
- **Sidebar**: Contains quick queries and navigation links.
- **MessageList**: Displays the list of messages exchanged in the chat.

### Styles
Global and theme-specific styles are defined in the `styles` directory.

### API Routes
The frontend includes a directory for API routes, which may handle server-side functions for requests.

## Backend
The backend is built with Node.js and TypeScript. It manages product data, chat interactions, and AI processing.

### Key Controllers
- **ChatController**: Handles chat-related requests, including sending and receiving messages.
- **ProductController**: Manages product-related requests, such as fetching product details.

### Services
- **AIService**: Contains methods for processing AI-related tasks.
- **ProductService**: Handles product data retrieval and manipulation.
- **SearchService**: Provides methods for searching products based on user queries.

### Middleware
Includes authentication and error handling middleware to ensure secure and reliable operations.

## Shared Types
The shared directory contains TypeScript types and interfaces for API requests and responses, product data, and chat messages, ensuring consistency across the application.

## Environment Variables
An example of the required environment variables is provided in the `.env.example` file.

## Docker
The project includes a `docker-compose.yml` file for easy deployment and management of services in Docker containers.

## Getting Started
To get started with the Dayita AI system, clone the repository and follow the instructions in the respective frontend and backend README files for setup and installation.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.