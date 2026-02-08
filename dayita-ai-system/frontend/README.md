# Dayita AI System - Frontend Documentation

## Overview

The Dayita AI System frontend is a React-based application designed to provide an interactive chat interface for users to engage with an intelligent product catalogue assistant. This application allows users to search for products, view details, and interact with the AI assistant seamlessly.

## Project Structure

The frontend project is organized as follows:

```
frontend
├── src
│   ├── components
│   │   ├── Chat.tsx          # Chat interface component
│   │   ├── Header.tsx        # Header component with title and navigation
│   │   ├── Sidebar.tsx       # Sidebar component with navigation links and quick queries
│   │   └── MessageList.tsx    # Component to display the list of messages
│   ├── pages
│   │   ├── index.tsx         # Main entry point for the application
│   │   └── api               # Directory for API routes
│   ├── styles
│   │   ├── globals.css       # Global CSS styles
│   │   └── theme.css         # Theme-specific styles
│   ├── types
│   │   └── index.ts          # TypeScript types and interfaces
│   └── App.tsx               # Root component of the React application
├── public                     # Directory for static assets
├── package.json               # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                  # Documentation for the frontend
```

## Installation

To get started with the frontend application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd dayita-ai-system/frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- **Interactive Chat Interface**: Users can interact with the AI assistant to find products and get information.
- **Quick Queries**: Predefined queries in the sidebar for easy access to common searches.
- **Responsive Design**: The application is designed to work on various screen sizes.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch and create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.