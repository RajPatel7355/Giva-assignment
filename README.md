<<<<<<< HEAD
# Giva-assignment
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
Follow these instructions to set up and run the project on your local machine.

Prerequisites
Ensure you have the following installed:

Node.js (v14+)
PostgreSQL
Installation
Clone the repository:

```bash

git clone https://github.com/RajPatel7355/Giva-assignment.git
cd Giva-assignment
```
Install dependencies for both frontend and backend:

For frontend
```bash
cd frontend
npm install
```
For backend:
```bash
cd ../backend
npm install
```
Set up PostgreSQL Database by creating a new database in your PostgreSQL shell:
```bash
CREATE DATABASE productsdb;
```
Create the products table:
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2),
  quantity INT
);
```
Optionally, insert sample data:
```sql
INSERT INTO products (name, description, price, quantity) VALUES
('Sample Product 1', 'Description 1', 10.00, 100),
('Sample Product 2', 'Description 2', 20.00, 200);
```
Configure Environment Variables:

Backend (.env file):
```
DB_USER=your_pg_username
DB_HOST=localhost
DB_NAME=productsdb
DB_PASS=your_pg_password
DB_PORT=5432
JWT_SECRET=your_secret_key  # Optional for authentication
```
Frontend (.env.local file):
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```
Running the Application
Run the Backend Server:
```
cd backend
npm start
```
The backend will run on http://localhost:5000
Run the Frontend:
```
cd ../frontend
npm run dev
```
Open http://localhost:3001/products in your browser to view the application
Testing (Optional)
To run unit tests, navigate to the backend directory and run:
```bash
npm test
```

