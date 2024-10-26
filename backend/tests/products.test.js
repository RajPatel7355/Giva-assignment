// const request = require('supertest');
// const app = require('../index'); // Path to your Express app

// describe('Product API', () => {
  
//   // Test GET request
//   it('should fetch all products', async () => {
//     const response = await request(app).get('/api/products');
//     expect(response.statusCode).toBe(200);
//     expect(response.body).toBeInstanceOf(Array);
//   });

//   // Test POST request
//   it('should add a new product', async () => {
//     const newProduct = { name: 'Test Product', description: 'Test description', price: 10, quantity: 5 };
//     const response = await request(app).post('/api/products').send(newProduct);
//     expect(response.statusCode).toBe(201);
//     expect(response.body.name).toBe('Test Product');
//   });

//   // Test PUT request
//   it('should update an existing product', async () => {
//     const updatedProduct = { name: 'Updated Product', description: 'Updated description', price: 15, quantity: 10 };
//     const response = await request(app).put('/api/products/1').send(updatedProduct); // Replace 1 with a valid product ID
//     expect(response.statusCode).toBe(200);
//     expect(response.body.name).toBe('Updated Product');
//   });

//   // Test DELETE request
//   it('should delete a product', async () => {
//     const response = await request(app).delete('/api/products/1'); // Replace 1 with a valid product ID
//     expect(response.statusCode).toBe(200);
//     expect(response.body.message).toBe('Product deleted successfully');
//   });
// });
// const request = require('supertest');
// const app = require('../index'); // Adjust the path to your Express app
// const { Pool } = require('pg');

// describe('Product API', () => {
//   let pool;

//   beforeAll(() => {
//     // Initialize the database pool
//     pool = new Pool({
//       user: process.env.DB_USER,
//       host: process.env.DB_HOST,
//       database: process.env.DB_NAME,
//       password: process.env.DB_PASS,
//       port: process.env.DB_PORT,
//     });
//   });

//   afterAll(async () => {
//     // Close the database pool and any open handles
//     await pool.end();
//   });

//   it('should fetch all products', async () => {
//     const response = await request(app).get('/api/products');
//     expect(response.statusCode).toBe(200);
//     expect(response.body).toBeInstanceOf(Array);
//   });

//   // Additional tests for POST, PUT, DELETE
 

//   // Test POST request
//   it('should add a new product', async () => {
//     const newProduct = { name: 'Test Product', description: 'Test description', price: 10, quantity: 5 };
//     const response = await request(app).post('/api/products').send(newProduct);
//     expect(response.statusCode).toBe(201);
//     expect(response.body.name).toBe('Test Product');
//   });

//   // Test PUT request
//   it('should update an existing product', async () => {
//     const updatedProduct = { name: 'Updated Product', description: 'Updated description', price: 15, quantity: 10 };
//     const response = await request(app).put('/api/products/1').send(updatedProduct); // Replace 1 with a valid product ID
//     expect(response.statusCode).toBe(200);
//     expect(response.body.name).toBe('Updated Product');
//   });

//   // Test DELETE request
//   it('should delete a product', async () => {
//     const response = await request(app).delete('/api/products/1'); // Replace 1 with a valid product ID
//     expect(response.statusCode).toBe(200);
//     expect(response.body.message).toBe('Product deleted successfully');
//   });
// });
const request = require('supertest');
const app = require('../index'); // Adjust the path to your Express app
const { Pool } = require('pg'); // Import Pool if not already done

describe('Product API', () => {
  let productId; // Variable to store the ID of the created product
  let pool;

  beforeAll(async () => {
    // Initialize the database pool
    pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT,
    });

    // Create a product to use in update and delete tests
    const newProduct = {
      name: 'Test Product',
      description: 'Description for Test Product',
      price: 10,
      quantity: 5,
    };
    const response = await request(app).post('/api/products').send(newProduct);
    productId = response.body.id; // Save the product ID for further tests
  });

  afterAll(async () => {
    // Close the pool connection after all tests complete
    await pool.end();
  });

  it('should fetch all products', async () => {
    const response = await request(app).get('/api/products');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should add a new product', async () => {
    const newProduct = { name: 'New Product', description: 'Description', price: 20, quantity: 10 };
    const response = await request(app).post('/api/products').send(newProduct);
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('New Product');
  });

  it('should update an existing product', async () => {
    const updatedProduct = {
      name: 'Updated Product',
      description: 'Updated description',
      price: 15,
      quantity: 10,
    };
    const response = await request(app).put(`/api/products/${productId}`).send(updatedProduct);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Updated Product');
  });

  it('should delete a product', async () => {
    const response = await request(app).delete(`/api/products/${productId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Product deleted successfully');
  });
});
