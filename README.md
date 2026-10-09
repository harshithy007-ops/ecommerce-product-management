# E-Commerce Product Management System

A simple mini project for CSE/SAP learning. It is a product management dashboard built with Node.js, Express, SQLite, and a responsive frontend.

## Features
- Add new products
- Edit product details
- Delete products
- View all products
- Search product list
- Persistent data using SQLite

## Tech Stack
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- SQLite3

## Project Structure
```text
.
├── database/
│   └── schema.sql
├── docs/
│   └── project-report.md
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── routes/
│   └── products.js
├── .gitignore
├── db.js
├── package.json
├── README.md
├── server.js
└──
```

## Installation
1. Install Node.js from https://nodejs.org/
2. Open terminal in the project folder
3. Run:

```bash
npm install
```

## Run the Project
```bash
npm start
```

Then open:
```text
http://localhost:3000
```

## API Endpoints
```text
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

## Sample Product Data
The app seeds a few sample products on first run.

## Report
Project documentation is available in:
- `docs/project-report.md`

## License
MIT

## Project Summary
This mini project helps students understand CRUD operations, API creation, database usage, and frontend-backend integration in a real-world e-commerce context.
