# E-Commerce Product Management System

## 1. Project Title
E-Commerce Product Management System

## 2. Abstract
This project is a mini web application designed to manage products in an online store. The system allows an administrator to add, update, delete, and view product records. It demonstrates core concepts of web development, database integration, and CRUD operations using a simple but practical real-world business model.

## 3. Objectives
- To create a product management dashboard
- To learn database integration in a web application
- To implement CRUD operations for products
- To design a user-friendly admin interface
- To prepare a mini project for academic learning and submission

## 4. Problem Statement
Many businesses need a simple tool to maintain product records such as name, category, stock, and price. Without a proper system, managing product information becomes difficult and error-prone. This project solves that issue by providing an easy-to-use product management application.

## 5. Scope
The system includes:
- Product add form
- Product list display
- Edit and delete operations
- Search product by name/category
- Storage in SQLite database
- Simple REST API backend

## 6. Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: SQLite
- Tools: VS Code, GitHub, Postman (optional)

## 7. Features
- Admin can add products
- Admin can edit product details
- Admin can delete products
- Product list is displayed dynamically
- Search bar for filtering products
- Data persists in the SQLite database

## 8. System Design
The application has three main layers:
1. Frontend interface for the admin
2. Backend API to process requests
3. SQLite database to store product records

## 9. Database Schema
The products table stores the following data:
- id
- name
- category
- description
- price
- stock
- image
- created_at

## 10. API Endpoints
- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

## 11. User Flow
1. Admin opens the dashboard
2. Enters product details
3. Saves the data through form submission
4. Product is added to the database
5. Product appears in the product list
6. Admin may edit or delete any product

## 12. Implementation Steps
1. Set up project folder
2. Install Node.js dependencies
3. Create SQLite database schema
4. Build Express backend routes
5. Create frontend dashboard UI
6. Connect frontend to API
7. Test CRUD operations
8. Prepare documentation and final report

## 13. Testing
The following tests were considered:
- Add product with valid data
- Add product with missing fields
- Update product details
- Delete a product
- Search by product name/category
- Validate database record persistence

## 14. Results
The application successfully performs CRUD operations for product management and provides a clean admin dashboard for managing e-commerce inventory.

## 15. Challenges Faced
- Connecting frontend and backend
- Managing database operations properly
- Handling invalid user inputs
- Designing simple but responsive UI

## 16. Future Enhancements
- Add user login and admin authentication
- Include product images upload
- Add category management page
- Add order management and sales analytics
- Add cart and checkout modules

## 17. Conclusion
This project is an effective mini project for CSE and SAP students. It covers important technologies such as web development, database design, and API building. It is engaging, practical, and suitable for academic learning and submission.

## 18. Viva Suggestions
- What is CRUD?
- How does the frontend communicate with the backend?
- Why use a database instead of storing data in files?
- What is Express.js?
- What is the purpose of SQLite in this project?
- How can this project be improved for a real e-commerce application?
