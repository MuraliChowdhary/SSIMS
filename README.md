# SmartStock: Inventory Management System

Welcome to SmartStock, an advanced inventory management system designed for supermarkets. This project utilizes the MERN stack (MongoDB, Express, React, Node.js) to create a comprehensive solution for managing products, orders, stock alerts, and sales analytics.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Frontend Screenshots](#frontend-screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

SmartStock aims to streamline supermarket operations by providing tools for inventory management, real-time stock alerts, order tracking, and sales analytics. The system includes role-based dashboards for different user types, including Admins, Managers, Cashiers, and Suppliers.

## Features
- **Role-Based Access Control:** Customizable dashboards for Admins, Managers, Cashiers, and Suppliers.
- **Product Management:** Add, update, delete, and view products with real-time updates.
- **Order Management:** Create, view, and update orders with role-specific access.
- **Stock Alerts:** Automated alerts for low stock levels, visible to Admins, Managers, and Suppliers.
- **Sales Analytics:** Comprehensive sales reports and trend visualizations.
- **Real-Time Updates:** WebSocket integration for real-time notifications.
- **Python Integration:** Advanced analytics using Python scripts for predictive analysis.
- **User Management:** Admin capabilities to manage users and assign roles.

## Technologies Used
### Frontend:
- React
- React Router
- Redux (optional for state management)
- WebSocket

### Backend:
- Node.js
- Express
- MongoDB
- Mongoose

### Integration:
- Python for advanced analytics
- WebSocket for real-time updates

## Installation

### Prerequisites
- Node.js
- MongoDB
- Python (for advanced analytics)

### Setup

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Muralichowdhary/SmartStock.git
    cd SmartStock
    ```

2. **Install Backend Dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install Frontend Dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Setup Environment Variables:**
   - Create a `.env` file in both `frontend` and `backend` directories with the necessary environment variables.

### Run the Application

- **Start the backend server:**
    ```bash
    cd backend
    npm start
    ```

- **Start the frontend development server:**
    ```bash
    cd ../frontend
    npm start
    ```

## Usage

1. **Access the Application:** Navigate to `http://localhost:3000` to view the application.

2. **Login:** Use the provided credentials to access different roles:
    - **Admin:** `admin@example.com` / `adminpassword`
    - **Manager:** `manager@example.com` / `managerpassword`
    - **Cashier:** `cashier@example.com` / `cashierpassword`
    - **Supplier:** `supplier@example.com` / `supplierpassword`

3. **Explore Features:**
   - **Admins:** Manage products, orders, users, and settings.
   - **Managers:** View and manage inventory, orders, and reports.
   - **Cashiers:** Process orders and view product details.
   - **Suppliers:** Monitor stock alerts related to their products.

## Project Structure

- **frontend/**: React application
  - `src/components/`: React components
  - `src/pages/`: Page components
  - `src/services/`: API services

- **backend/**: Node.js + Express application
  - `models/`: Mongoose models
  - `routes/`: API routes
  - `controllers/`: Request handlers
  - `middlewares/`: Authentication and validation middleware

## API Endpoints

### User Authentication:
- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: Login and receive a JWT token

### Product Management:
- **GET** `/api/products`: Retrieve all products
- **POST** `/api/products`: Add a new product
- **PUT** `/api/products/:id`: Update a product
- **DELETE** `/api/products/:id`: Delete a product

### Order Management:
- **GET** `/api/orders`: Retrieve all orders
- **POST** `/api/orders`: Create a new order
- **PUT** `/api/orders/:id`: Update an order status
- **DELETE** `/api/orders/:id`: Cancel an order

### Stock Alerts:
- **GET** `/api/alerts`: Retrieve stock alerts

### Sales Analytics:
- **GET** `/api/analytics/sales`: Retrieve sales data

## Frontend Screenshots
*(Add screenshots here)*

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your fork.
4. Submit a pull request with a description of your changes.

*Note: The project is still under development.*

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
